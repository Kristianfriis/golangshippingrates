package sqllite

import (
	"log"

	"github.com/jmoiron/sqlx"
	_ "modernc.org/sqlite"
)

type Service struct {
	DB *sqlx.DB
}

func NewService() *Service {
	return &Service{}
}

var robotParts = `
	CREATE TABLE IF NOT EXISTS robotParts(
		id INTEGER PRIMARY KEY, 
		name TEXT, 
		points INTEGER, 
		createdAt TEXT
	)
`

var completeRobots = `
	CREATE TABLE IF NOT EXISTS completeRobots(
		id INTEGER PRIMARY KEY, 
		name TEXT, 
		head INTEGER, 
		body INTEGER, 
		rightArm INTEGER, 
		leftArm INTEGER, 
		legs INTEGER, 
		createdAt TEXT
	)
`

func (s *Service) GetDatabase() {
	db, err := sqlx.Connect("sqlite", "./battlebots.db")
	if err != nil {
		log.Fatalln("Failed to Connect: $v", err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatalln(err)
	}
	db.MustExec(robotParts)
	db.MustExec(completeRobots)
	s.DB = db
}
