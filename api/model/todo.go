package model

import (
	"log"
	"time"
)

type Todo struct {
	ID uint `json:"id"`
	Title string `json:"title"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}


func CreateTodo(title string) (err error) {
	now := time.Now()
	_, err = Db.Exec("INSERT INTO todos (title, created_at, updated_at) VALUES(?, ?, ?)", title, now, now)
	if err != nil {
		log.Fatalln(err)
	}
	return err
}