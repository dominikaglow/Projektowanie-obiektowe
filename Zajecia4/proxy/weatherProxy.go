package proxy

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"weather-api/models"

	"github.com/joho/godotenv"
)

type WeatherProxy struct{}

func NewWeatherProxy() *WeatherProxy {
	return &WeatherProxy{}
}

func (wp *WeatherProxy) GetWeatherData() ([]models.WeatherDay, error) {
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

func (wp *WeatherProxy) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	weatherData, err := wp.GetWeatherData()
	if err != nil {
		http.Error(w, "Failed to get weather data", http.StatusInternalServerError)
		return
	}

	resp, err := json.Marshal(weatherData)
	if err != nil {
		http.Error(w, "Failed to encode weather data", http.StatusInternalServerError)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(resp)
}
