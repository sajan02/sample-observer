class NumberModel {
    constructor(){
        this.number = 0;
        this.color = 'red';
        this.observer = [];
    }

    increment(){
        const colors = ['orange','green','blue','red'];
        this.number++;
        this.color = colors[Math.floor(Math.random()*colors.length)];
        this.notifyObserver();
    }

    addObserver(o){
        this.observer.push(o);
    }

    notifyObserver(){
        for (let o of this.observer) {
            o.update(this)
        }
    }
}