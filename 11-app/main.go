package main

import (
	"fmt"
)



func main() {
	a := [3]int{1, 2, 3}
	b := a[0:1]
	c := b[0:2]

	fmt.Printf("a[%p] = %v \n", &a, a)
	fmt.Printf("b[%p] = %[1]v \n", b)
	fmt.Printf("c[%p] = %[1]v \n", 	c)

	c = append(c, 5)
	fmt.Printf("a[%p] = %v \n", &a, a)
	fmt.Printf("c[%p] = %[1]v \n", 	c)
}