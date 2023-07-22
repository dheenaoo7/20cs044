package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type data struct {
	companyName string `json:"companyName"`
	ownerName   string `json:"ownerName"`
	rollNo      string `json:"rollNo"`
	ownerEmail  string `json:"ownerEmail"`
	accessCode  string `json:"accessCode"`
}
type response struct {
	companyName  string `json:"companyName"`
	clientID     string `json:"clientID"`
	clientSecret string `json:"clientSecret"`
}

type id struct {
	companyName  string `json:"companyName"`
	clientId     string `json:"clientId"`
	ownerName    string `json:"ownerName"`
	ownerEmail   string `json:"ownerEmail"`
	rollNo       string `json:"rollNo"`
	clientSecret string `json:"clientSecret"`
}

func main() {

	var ram = id{
		companyName:  "Train Central",
		clientId:     "b46128a0-fbde-4c16-a4b1-6ae6ad718e27",
		ownerName:    "Ram",
		ownerEmail:   "ram@abc.edu",
		rollNo:       "1",
		clientSecret: "XOyolORPayKBOdAN",
	}
	js1, err1 := json.Marshal(ram)
	if err1 != nil {
		fmt.Println("Error encoding:", err1)
		return
	}
	resp, err2 := http.Post("http://20.244.56.144/train/auth", "application/json", bytes.NewBuffer(js1))
	if err2 != nil {
		fmt.Println("Error making POST request:", err2)
		return
	}
	defer resp.Body.Close()
	if resp.StatusCode == http.StatusOK {

		var response struct {
			token_type   string `json:"token_type"`
			access_token string `json:"access_token"`
			expires_in   string `json:"expires_in"`
		}

		err := json.NewDecoder(resp.Body).Decode(&response)
		if err != nil {
			fmt.Println("Error decoding response JSON:", err)
			return
		}
		fmt.Println("Authentication Successful!")
		fmt.Println("Company Name:", response.token_type)
		fmt.Println("Client ID:", response.access_token)
		fmt.Println("Client Secret:", response.expires_in)

	} else {
		fmt.Println("Authentication failed. Status Code:", resp.StatusCode)
	}
}
