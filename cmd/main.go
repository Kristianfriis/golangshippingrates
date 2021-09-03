package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Static("/main", "./pkg/site/private/main")
	r.Use(static.Serve("/site", static.LocalFile("./pkg/site/private", true)))

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, "ping")
	})

	// r.Static("/assets", "./assets")

	r.Run()
}
