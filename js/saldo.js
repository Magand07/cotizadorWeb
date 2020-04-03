class Saldo
{
    constructor(entero = 0, centavos = 0, negativo = false)
    {
        this._chkEntero(entero);
        this._chkCentavos(centavos);
        this._negativo = (negativo == undefined || !negativo) ? false : (negativo == true);
        this._centavos = entero * 100 + centavos;
    }

    get entero()
    {
        return Math.floor(this._centavos / 100);
    }

    set entero(val) {
        this._chkEntero(val);
        this.centavos = val * 100 + this.centavos % 100;
    }

    get centavos()
    {
        return this._centavos % 100;
    }

    set centavos(val)
    {
        this._chkCentavos(val);
        this._centavos -= this._centavos % 100;
        this._centavos += val;
    }

    get negativo()
    {
        return this._negativo;
    }

    set negativo(value) {
        this._negativo = value == true;
    }

    getEntero()
    {
        return this.entero;
    }

    getCentavos()
    {
        return this.centavos;
    }

    setEntero(entero)
    {
        this._centavos = this.centavos % 100;
        this._centavos += entero * 100
    }

    setCentavos(centavos)
    {
        this._centavos -= this.centavos % 100;
        this._centavos += centavos;
    }

    add(other)
    {
        if (! (other instanceof Saldo))
        {
            throw "Sólo puede sumar objetos del mismo tipo [" + typeof other + " " + other + "]";
        }
        // console.log("Sumando [" + this.toString() + "] + [" + other.toString() + "]")
        if (this.negativo == other.negativo)
        {
            //console.log("caso 1");
            this._centavos += other._centavos;
        }
        else
        {
            if (this.abs().ge(other.abs()))
            {
                //console.log("caso 2");
                this._centavos -= other._centavos;
                this.negativo = this.negativo && this._centavos != 0;
            }
            else
            {
                //console.log("caso 3");
                this._centavos = other._centavos - this._centavos;
                this.negativo = other.negativo && this._centavos != 0;
            }
            
        }
        //console.log(this);
        return this;
    }

    sub(other)
    {
        if (! (other instanceof Saldo))
        {
            throw "Sólo puede operar objetos del mismo tipo [" + typeof other + " " + other + "]";
        }
        return this.add(new Saldo(other.entero, other.centavos, !(other.negativo)));
    }

    mult(other)
    {
        return this;
    }

    div(other)
    {
        return this;
    }

    eq(other)
    {
        if (! (other instanceof Saldo))
        {
            throw "Sólo puede comparar objetos del mismo tipo [" + typeof other + " " + other + "]";
        }
        return (this._centavos == other._centavos
                && this.negativo == this.negativo);
    }

    abs()
    {
        return new Saldo(this.entero, this.centavos, false);
    }

    ne(other)
    {
        return !this.eq(other);
    }

    gt(other)
    {
        if (! (other instanceof Saldo))
        {
            throw "Sólo puede comparar objetos del mismo tipo [" + typeof other + " " + other + "]";
        }
        if (!this.negativo)
        {
            if (!other.negativo)
            {
                return this._centavos > other._centavos;
            }
            return true;
        }
        else
        {
            if (!other.negativo)
            {
                return false;
            }
            return this._centavos < other._centavos;
        }
    }

    lt(other)
    {
        if (! (other instanceof Saldo))
        {
            throw "Sólo puede comparar objetos del mismo tipo [" + typeof other + " " + other + "]";
        }
        if (!this.negativo)
        {
            if (!other.negativo)
            {
                return this._centavos < this._centavos;
            }
            return false;
        }
        else
        {
            if (!other.negativo)
            {
                return true;
            }
            return this._centavos > other._centavos;
        }
    }

    ge(other)
    {
        return (this.eq(other)
                || this.gt(other));
    }

    le(other)
    {
        return (this.eq(other)
                || this.lt(other));
    }

    toString()
    {
        //console.log(this);
        let cadena = '';
        if (this.negativo)
        {
            cadena += '-';
        }
        cadena += this.entero + '.' + (this.centavos < 10 ? '0' + this.centavos : this.centavos);
        return cadena;
    }

    toFloat() {
        return Number.parseFloat(this.toString());
    }

    copy()
    {
        return new Saldo(this.entero, this.centavos, this.negativo);
    }

    _chkEntero(entero){
        this._chkInt(entero);
        this._chkPositive(entero);
    }

    _chkCentavos(centavos) {
        this._chkInt(centavos);
        this._chkPositive(centavos);
        this._chkGe0Lt100(centavos);
    }

    _chkInt(val) {
        if (!Number.isInteger(val))
        {
            throw "El número debe ser entero";
            console.trace();
        }
    }

    _chkPositive(val) {
        if (val < 0)
        {
            throw "El número debe ser positivo";
        }
    }

    _chkGe0Lt100(val) {
        if (!(val >= 0 && val < 100)) {
            throw "El número debe estar entre 0 y 100";
        }
    }
}

function test_saldos()
{
    let ente1 = [1, 1, 1,  1,  1,  1,  0,  0];
    let ente2 = [1, 1, 1,  1,  1,  1,  1,  1];
    let cent1 = [0, 0, 0, 20, 20, 20, 20, 20];
    let cent2 = [0, 0, 0, 30, 30, 30,  0,  0];
    let nega1 = [0, 0, 1,  0,  0,  1,  1,  0];
    let nega2 = [0, 1, 0,  0,  1,  0,  0,  1];
    let s1;
    let s2;
    let s3;
    for (let i = 0; i < ente1.length; i++)
    {
        s1 = new Saldo(ente1[i], cent1[i], nega1[i]);
        s2 = new Saldo(s1.entero, s1.centavos, s1.negativo);
        s3 = new Saldo(ente2[i], cent2[i], nega2[i]);
        console.log(`${s2.toString()} + ${s3.toString()} = ${s1.add(s3).toString()}`);
    }
}