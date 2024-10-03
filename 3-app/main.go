package main

type User struct {
	ID int
	Name string
}

func updateName(u *User, name string) {
	u.Name = name
}

func main() {
	user := User{ID: 42, Name: "Gopher"}
	updateName(&user,"Tiago")
	println(user.Name)
}