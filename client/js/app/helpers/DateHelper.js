class DateHelper {

    // adding a msg to the user to inform that this class can not be instatiated
    constructor (){
        throw new Error("esta classe nao pode ser instaciada");    
    }

    //by addind the keyword "static" that came with ES6 I can call this methods
    // without having to instantiate a new object from this class
    static textToDate(text){

        // lets add a fail fast using RegExp, this will prevent the user to enter the
        // data with the wrong format
        if (!/\d{4}-\d{2}-\d{2}/.test(text)) 
            throw new Error("the text to be converted to Date need to be pass in the following format 'YYYY-MM-DD'.")
        return new Date(text.split('-'))
    }
    
    static dateToText(date){
        return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`
    }
    
}