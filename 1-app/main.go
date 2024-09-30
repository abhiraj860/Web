package main

import (
	"fmt"
	"strings"
)

func main() {

	conferenceName := "Go Conference";
	const conferenceTickets int = 50;
	var remainingTickets uint = 50;
	bookings := []string{};

	fmt.Printf("Welcome to %v booking application\n", conferenceName);
	fmt.Printf("We have total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets);
	fmt.Println("Get your tickets here to attend");

	for {

		var firstName string;
		var lastName string; 
		var email string;
		var userTickets uint;
		// ask user for name
		fmt.Println("Enter your first name: ");
		fmt.Scan(&firstName);

		fmt.Println("Enter your last name: ");
		fmt.Scan(&lastName);

		fmt.Println("Enter your email: ");
		fmt.Scan(&email);

		fmt.Println("Enter number of tickets: ");
		fmt.Scan(&userTickets);

		remainingTickets -= userTickets;
		bookings = append(bookings, firstName + " " + lastName);
		
		fmt.Printf("Thank you %v %v of the user for booking %v tickets.\n", firstName, lastName, userTickets)
		fmt.Printf("You will recieve a confirmation email at %v.\n", email);
		fmt.Printf("%v tickets remaining for %v\n", remainingTickets, conferenceName);


		firstNames := []string{};
		for _, booking := range bookings {
			var names = strings.Fields(booking);
			firstNames = append(firstNames, names[0]);
		}
		fmt.Printf("The first names of booking are: %v\n", firstNames);
	}

}