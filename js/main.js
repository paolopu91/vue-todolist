/*
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
-Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
-Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, senza chiedere all’utente conferma, il todo viene rimosso dalla lista.
MILESTONE 3
-Predisporre un campo di input testuale (sempre visibile) e un pulsante “aggiungi”: cliccando sul pulsante, 
    il testo digitato viene letto e utilizzato per creare un nuovo todo, 
    che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento! (modificato) 
*/

new Vue({
    el: "#app",
    data:{
        toDoList:[
            {
                text:"Wake up in the morning at 6:00 o'clock",
                done:false,
            },
                {
                text:"Go to the gym at 7:00 o'clock",
                done:false,
                },
            {
                text:"Go to work at 8:30 o'clock",
                done:false,
            },
            {
                text:"have lunch with rice and vegetables",
                done:false,
            },
            {
                text:"at 18:00 go home from work",
                done:false,
            },
            {
                text:"go to run at 19:00",
                done:false,
            },
            {
                text:"have dinner before 21:00",
                done:false,
            },
            {
                text:"watch a movie or read a book",
                done:false,
            },
            {
                text:"go to sleep before 23:00 pm"
            },
        ], 
    },
    methods:{
    //    ceckedList:{
        
    //    }
    }
})
