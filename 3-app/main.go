package main

import "fmt"

func main() {
	userId := 42
	fmt.Println(userId)
	fmt.Println(&userId)
	anotherUserId := &userId
	fmt.Println(anotherUserId)

	userId = 100
	fmt.Println(anotherUserId)
	fmt.Println(*anotherUserId)
}