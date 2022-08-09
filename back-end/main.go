package main

import (
	"log"
	"net/http"
	"test/controller"
	"test/database"
	"test/entity"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql" //Required for MySQL dialect
)

func main() {
	initDB()
	log.Println("Starting the HTTP server on port 8090")

	router := mux.NewRouter().StrictSlash(true)
	initaliseHandlers(router)
	log.Fatal(http.ListenAndServe(":8090", router))
}

func initaliseHandlers(router *mux.Router) {
	router.HandleFunc("/create", controller.Createproduct).Methods("POST")
	router.HandleFunc("/get", controller.GetAllproduct).Methods("GET")
	router.HandleFunc("/get/{id}", controller.GetproductByID).Methods("GET")
	router.HandleFunc("/update/{id}", controller.UpdateproductByID).Methods("PUT")
	router.HandleFunc("/delete/{id}", controller.DeletproductByID).Methods("DELETE")
}

func initDB() {
	config :=
		database.Config{
			ServerName: "localhost:3306",
			User:       "root",
			Password:   "Malikdev",
			DB:         "learning",
		}

	connectionString := database.GetConnectionString(config)
	err := database.Connect(connectionString)
	if err != nil {
		panic(err.Error())
	}
	database.Migrate(&entity.Product{})
}