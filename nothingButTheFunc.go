package main

import (
	"fmt"
	"time"
)

func main() {
	// First Class Function
	firstClass := func(name string) {
		fmt.Println("Hey", name, "I'm first class 💰")
	}
	firstClass("Khizar")
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

// Recursion
func factorial(num int) int {
	if num == 1 { //base case
		return num
	}
	return num * factorial(num-1)
}

// currying
