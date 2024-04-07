package models

type WeatherDay struct {
	ID            int      `json:"id" gorm:"primaryKey"`
	DateTime      string   `json:"datetime"`
	DateTimeEpoch int      `json:"datetimeEpoch"`
	TempMax       float64  `json:"tempmax"`
	TempMin       float64  `json:"tempmin"`
	Temp          float64  `json:"temp"`
	Conditions    string   `json:"conditions"`
	Description   string   `json:"description"`
	Icon          string   `json:"icon"`
	Stations      []string `json:"stations" gorm:"-"`
}
