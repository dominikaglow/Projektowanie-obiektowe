package main

import (
	"weather-api/proxy"

	"github.com/labstack/echo"
)

func main() {
	wp := proxy.NewWeatherProxy()

	e := echo.New()
	e.Any("/data", func(c echo.Context) error {
		wp.ServeHTTP(c.Response(), c.Request())
		return nil
	})
	e.Logger.Fatal(e.Start(":3000"))

}
