package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo"
)

type WeatherDay struct {
	DateTime      string   `json:"datetime"`
	DateTimeEpoch int      `json:"datetimeEpoch"`
	TempMax       float64  `json:"tempmax"`
	TempMin       float64  `json:"tempmin"`
	Temp          float64  `json:"temp"`
	Conditions    string   `json:"conditions"`
	Description   string   `json:"description"`
	Icon          string   `json:"icon"`
	Stations      []string `json:"stations"`
}

type WeatherData struct {
	QueryCost       int          `json:"queryCost"`
	Latitude        float64      `json:"latitude"`
	Longitude       float64      `json:"longitude"`
	ResolvedAddress string       `json:"resolvedAddress"`
	Address         string       `json:"address"`
	Timezone        string       `json:"timezone"`
	TzOffset        float64      `json:"tzoffset"`
	Description     string       `json:"description"`
	Days            []WeatherDay `json:"days"`
}

func main() {
	e := echo.New()
	e.GET("/data", GetWeatherData)
	e.Logger.Fatal(e.Start(":3000"))

}

func GetWeatherData(c echo.Context) error {
	if err := godotenv.Load(); err != nil {
		fmt.Println("Error loading .env file:", err)
	}

	apiKey := os.Getenv("API_KEY")
	url := "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Warsaw,PL?key=" + apiKey
	res, err := http.Get(url)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	var weatherData WeatherData
	err = json.NewDecoder(res.Body).Decode(&weatherData)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, weatherData)
}
