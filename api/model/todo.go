package model

import (
	"time"
)

type Todo struct {
	ID uint `json:"id"`
	Title string `json:"title"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
