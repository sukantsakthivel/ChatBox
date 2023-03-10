function getBotResponse(input) {
    //rock paper scissors
    if ((input == "Need some help" ) || (input == "Have some issues in the product" )){
        return "Please provide your ID";
    } else if (input == "12233445") {
        return "What was the Problem You have face with the product";
    } else if ((input == "Some parts have missed")||(input == "colour mismatched")||(input == "Colour mismatched")) {
        return "Are you willing to Exchange Return the product or Cancel the process ";
    }
    else if ((input == "Exchange")||(input == "Return")) {
        return "Congratulations!!!! Your request Accepted";
    }
    else if (input == "Cancel") {
        return "Ok, Done. Your query is Noted ";
    }
    else {
        return "Try asking something else!";
    }
}
