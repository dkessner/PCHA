__Unit 9 Group Work__  
__PCHA 2022-23 / Dr. Kessner__  

__No calculator!  Have fun!__

\vspace{.2in}

\let\svlim\lim\def\lim{\displaystyle\svlim}


__1.__ Evaluate the following limits, evaluating left and right side limits
where applicable.

a. $\lim_{x \to 0} x\cot 7x$

\vspace{1in}

b. $\lim_{x \to -\infty} e^{x} \sin x$

\vspace{1in}

c. $\lim_{x \to 1} \frac{5x^2+5x-10}{(x-1)(x+2)}$

\vspace{1in}

d. $\lim_{x \to 0} \csc x$

\vspace{1in}

e. $\lim_{h \to 0} \frac{f(3+h)-f(3)}{h}$, where $f(x) = x^2$. 
_(Hint: use what you know about derivatives)_

\newpage

__2.__  For the following functions find the derivative using one of the limit definitions.

a. Suppose that a little bird or a mathematician tells you that $\lim_{h \to 0}
\frac{a^h-1}{h} = \ln(a)$.  Find the derivative of $f(x) = a^x$ (using a limit
definition).

\vspace{4in}

b. Find $g'(x)$, where $g(x) = mx + b$, using a limit definition.

\newpage

__3.__ Using the various rules for differentiation, calculate the derivatives
of the following functions.

a. $p(x) = \tan x \cot x$

\vspace{1.2in}

b. $q(x) = 2 \sin x \cos x$.

\vspace{1.2in}

c. $r(x) = \sin 2x$

\vspace{1.2in}

d. $s(x) = e^{\cot (x^3 - 1)}$

\vspace{1.2in}

e. $t(x) = \log_2(\sec^3(x^5))$

\vspace{1.2in}

\newpage

__4.__  Consider the curve $x = 4y^2$.

a. Sketch the graph of this curve.

\vspace{2in}

b. Find $\frac{dy}{dx}$ (in terms of $x$ and $y$) by implicit differentiation.

\vspace{1in}

c. Solve for $y$ in terms of $x$ (choose the positive square root).

\vspace{1in}

d. Find $\frac{dy}{dx}$ using the expression for $y$ you found above.

\vspace{1in}

e. Verify that these two formulas for $\frac{dy}{dx}$ are the same.

\newpage

__5.__  Suppose a bacterial colony begins with 4000 cells and the population
doubles every 4 hours.

a. Write an equation to model the population $P(t)$ of the colony as a function
of time.

\vspace{1.5in}

b. Find the average rate of growth in the population over the first 8 hours.

\vspace{1.5in}

c. Find $P'(t)$.

\vspace{1.5in}

d. Calculate the growth rate (exact) at $t=0$, $t=4$, and $t=8$ hours.  Given that 
$\ln 2 \approx .693$, approximate these rates (calculator ok).

\newpage


__6.__ 

\vspace{-.7in}

\begin{tikzpicture}[line cap=round,line join=round,>=triangle 45,x=1cm,y=1cm]
\clip(-2.555473733495448,-2.009584028416131) rectangle (6.849455633124769,4.73295078481378);
\draw [line width=2pt] (0,2) circle (0.9986490875177326cm);
\draw [line width=2pt] (-0.5892195285670228,1.1936995924872322)-- (-1,0);
\draw [line width=2pt] (0.57,1.18)-- (1,0);
\draw [<->,line width=1pt] (2,1) -- (2,0);
\draw [<->,line width=1pt] (2,1) -- (2,3);
\draw (2.1098987656343007,2.0787989390191206) node[anchor=north west] {$12''$};
\draw (2.118141473229936,0.6033542794003506) node[anchor=north west] {$10''$};
\end{tikzpicture}

\vspace{-.7in}

Suppose a flea is sitting on a small mouse-powered Ferris wheel.  The bottom of
the wheel sits $10''$ off the ground, and the diameter of the wheel is $12''$.
You give the mouse some coffee so the mouse runs fast: 3 seconds for a
revolution.  The flea starts at the point furthest to the right, and the wheel
moves counter-clockwise.

a. Write parametric equations $x(t)$ and $y(t)$ to model the position of the
flea as a function of time.  When will the flea first be at the top of the wheel?
Verify the position of the flea at that time.

\vspace{1.5in}

b. Find $x'(t)$ and $y'(t)$.

\vspace{1in}

c. Evaluate $x'(t)$ and $y'(t)$ at the top of the wheel.

\vspace{1in}

d. Find $x''(t)$ and $y''(t)$.

\vspace{1in}

e. Evaluate $x''(t)$ and $y''(t)$ at the top of the wheel.


\newpage

__7.__ Recall that you can model projectile motion with parametric equations:
$$
    x(t) = x_0 + v_x t
$$
$$
    y(t) = y_0 + v_y t -16t^2 
$$
where $(x_0, y_0)$ is the initial position of the object, and $v_x$ and $v_y$
are the components of the initial velocity vector $v$:

\begin{tikzpicture}[line cap=round,line join=round,>=triangle 45,x=1.0cm,y=1.0cm]
\clip(-0.86,-0.53) rectangle (4.43,2.78);
\draw [->,line width=2pt] (0,0) -- (3.56,2);
\draw [line width=2pt] (3.56,2)-- (3.56,0);
\draw [line width=2pt] (0,0)-- (3.56,0);
\draw [shift={(0,0)}] plot[domain=0:0.51,variable=\t]({1*1.08*cos(\t r)+0*1.08*sin(\t r)},{0*1.08*cos(\t r)+1*1.08*sin(\t r)});
\begin{scriptsize}
\draw[color=black] (1.73,1.34) node {$v$};
\draw[color=black] (3.93,0.95) node {$v_y$};
\draw[color=black] (1.92,-0.31) node {$v_x$};
\draw[color=black] (1.19,0.3) node {$\theta$};
\end{scriptsize}
\end{tikzpicture}

Suppose that you launch a rocket from an 80' building, at an angle
of $30^{\circ}$, with an initial speed of $128$ ft/sec. 

a. Write equations for $x(t)$ and $y(t)$.

\vspace{1in}

b.  Find $x'(t)$ and $y'(t)$.  Interpret your answer.

\vspace{1in}

c.  Find $x''(t)$ and $y''(t)$.  Interpret your answer.

\vspace{1in}

d.  Using the derivatives you found above, find the maximum height of the rocket.

\vspace{1in}

e.  When does the rocket hit the ground, and how far has it traveled in the
x-direction?

\vspace{1in}


---
pagetitle: none
geometry: margin=1in
---


