package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"weather-api/models"

	"github.com/joho/godotenv"
	"github.com/labstack/echo"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	weatherDay, err := getWeatherData()
	if err != nil {
		panic("Failed to get weather data")
	}

	dbWeather, err := gorm.Open(sqlite.Open("weather.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database")
	}

	if err := dbWeather.AutoMigrate(&models.WeatherDay{}); err != nil {
		panic("Failed to migrate the database")
	}

	for _, day := range weatherDay {
		if result := dbWeather.Create(&day); result.Error != nil {
			panic("Failed to insert data into the database")
		}
	}
	e := echo.New()
	e.GET("/data", func(c echo.Context) error {
		var days []models.WeatherDay
		if result := dbWeather.Find(&days); result.Error != nil {
			return result.Error
		}
		return c.JSON(http.StatusOK, days)

	})
	e.Logger.Fatal(e.Start(":3000"))

}

func getWeatherData() ([]models.WeatherDay, error) {
	if err := godotenv.Load(); err != nil {
		fmt.Println("Error loading .env file:", err)
	}

	apiKey := os.Getenv("API_KEY")
	url := "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Warsaw,PL?key=" + apiKey
	res, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	var weatherData struct {
		Days []models.WeatherDay `json:"days"`
	}
	err = json.NewDecoder(res.Body).Decode(&weatherData)
	if err != nil {
		return nil, err
	}

	return weatherData.Days, nil
}
