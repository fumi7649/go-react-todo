package main

import (
	"fmt"

	"github.com/fumi7649/go-react-todo/model"
	"github.com/fumi7649/go-react-todo/utils"
)

func init () {
	utils.LoggingSettings("todoapp.log")
	model.DbConnect()
}

func main () {
	
}