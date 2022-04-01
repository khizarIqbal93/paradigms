package main

import (
	"fmt"
	"time"
)

func main() {
	makeGreeting := greet("Chirag")
	makeGreeting()
}

// First Class Function
var firstClass func(string) = func(name string) {
	fmt.Println("Hey", name, "Im first class 💰")
}

// Higher Order Functions

func greet(name string) func() {
	return func() {
		fmt.Printf("Hey %v, did you know Khiz doesn't like OOP 😱\n", name)
		for i := 0; i < 3; i++ {
			time.Sleep(time.Second * 2)
			fmt.Println("LOCK HIM UP!")
		}
	}
}
