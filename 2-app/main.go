package main

import "fmt"

func main() {
	fmt.Println("Signed integers:")
	var a int8 = 127
	var b int16 = -32768
	fmt.Println("a=", a);
	fmt.Println("b=", b);

	fmt.Println("Unsigned integers:");
	var c uint8 = 255
	var d uint16 = 65535
	fmt.Println("c=", c);
	fmt.Println("d=", d);

}