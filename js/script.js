class Circulo {
    constructor(raio) {
        this.raio = raio
    }
    circunferencia() {
        if (typeof (this.raio) == 'number') {
            return (2 * Math.PI * this.raio).toFixed(2);
        } else { return NaN; }
    }
    area() {
        if (typeof (this.raio) == 'number') {
            return (Math.PI * (this.raio ** 2)).toFixed(2);
        } else { return NaN; }
    }
}


function calcular() {
    let raio = parseInt(document.getElementById('raio').value);

    if (!raio) {
        document.getElementById('container-resultado').style.minHeight = '0px';
        document.getElementById('container-resultado').style.opacity = '0%';
        document.getElementById('display-circun').style.marginTop = '-20vh'
        document.getElementById('display-area').style.marginTop = '-5vh'

    } else {
        document.getElementById('container-resultado').style.opacity = '100%';
        document.getElementById('container-resultado').style.minHeight = '20vh';
        document.getElementById('display-circun').style.marginTop = ''
        document.getElementById('display-area').style.marginTop = ''


        const circ = new Circulo(raio);
        const circun = circ.circunferencia();
        const area = circ.area();

        document.getElementById('display-circun').innerHTML = circun;
        document.getElementById('display-area').innerHTML = area;
    }
}