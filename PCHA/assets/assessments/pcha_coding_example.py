from turtle import *
from math import *

reset()

shape("turtle")

# this is a comment

for i in range(4):
    forward(100)
    left(90)
   
penup()   
goto(-100, 100)    
pendown()    
    
    
for i in range(5):
    forward(100)
    left(72)

bgcolor("black")
width(5)

# circle

color("blue")

penup()
goto(100, 0)
pendown()


t = 0

while t < 2*pi + .1:
    r = 100
    x = r*cos(t)
    y = r*sin(t)
    goto(x,y)
    t += .1
 
# rose curve 

color("#00ff00")


penup()
goto(0, 0)
pendown()
    
    
t = 0

while t < pi:
    r = 100 * sin(3*t)
    x = r*cos(t)
    y = r*sin(t)
    goto(x,y)
    t += .1
 

# limacon

color("red")

penup()
goto(100, 0)
pendown()


t = 0

while t < 2*pi + .1:
    r = 100 - 200*sin(t)
    x = r*cos(t)
    y = r*sin(t)
    goto(x,y)
    t += .1
 



# spiral

width(2)
color("yellow")

penup()
goto(0, 0)
pendown()


t = 0

while t < 8*pi:
    r = 10*t
    x = r*cos(t)
    y = r*sin(t)
    goto(x,y)
    t += .1
 


done()



















