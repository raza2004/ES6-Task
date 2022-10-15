class automobile
{
constructor(
    name, model, color, type
)
{this.name=Maruti
 this.model=Xmax
 this.color=Silver
 this.type=Automatic

}
}
class car extends automobile
{
    constructor(name, model, color, type, doors, maxspeed)
    {this.doors=Automatic
    this.maxspeed=300
    super(name, model, color, type)
    }
}
class truck extends automobile
{
    constructor(name, model, color, type, doors, maxspeed)
    {this.doors=Automatic
    this.maxspeed=300
    super(name, model, color, type)
    }
}
console.log(automobile)
console.log(car)
console.log(truck)