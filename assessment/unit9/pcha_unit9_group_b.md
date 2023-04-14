__Unit 9 Group Work B__  
__PCHA 2022-23 / Dr. Kessner__  

__No calculator!  Have fun!__

\vspace{.2in}

\let\svlim\lim\def\lim{\displaystyle\svlim}


__1.__ Evaluate the following limits, evaluating left and right side limits
where applicable.

a. $\lim_{x \to 0} x\csc \frac{x}{3}$

\vspace{1in}

b. $\lim_{x \to 0} x \sin \frac{x}{3}$

\vspace{1in}

c. $\lim_{x \to \infty} 10^{-x} \sin \frac{x}{3}$

\vspace{1in}

d. $\lim_{x \to 0} \cot \frac{x}{3}$

\vspace{1in}

e. $\lim_{x \to 0} \frac{\sin(\pi+x)-\sin(\pi)}{x}$. 

\newpage

__2.__ a. Find the derivative of $f(x)=\cos 2x$ using a limit definition.
Recall that $\lim_{x \to 0} \frac{\sin x}{x} = 1$ and $\lim_{x \to 0}
\frac{\cos x - 1}{x} = 0$.  
_Hint:_ Use the sum angle formula $\cos(u+v) = \cos u \cos v - \sin u \sin v$,
but don't use the double angle formula.


\vspace{4in}

b. Find the derivative of $g(x) = \frac{1}{x}$ using the limit definition:
$$g'(a) = \lim_{x \to a} \frac{g(x)-g(a)}{x-a}$$

\newpage

__3.__ Using the various rules for differentiation, calculate the derivatives
of the following functions.

a. $p(x) = e^{\sin x}$

\vspace{1.5in}

b. $q(x) = \sin^2 x + \cos^2 x$ \quad (Practice using power and chain rules!)

\vspace{1.5in}

c. $r(x) = \sin^4 x - \cos^4 x$

\vspace{1.5in}

d. $s(x) = -\cos 2x$  \quad (Notice that $s'(x) = r'(x)$.  Challenge: verify that $r(x) = s(x)$.)

\vspace{1.5in}

e. $t(x) = 2^{\sin x^2}$

\vspace{1.5in}

\newpage

__4.__  Consider the curve $x = 10^y$.

a. Sketch the graph of this curve.

\vspace{2in}

b. Find $\frac{dy}{dx}$ (in terms of $x$ and $y$) by implicit differentiation.

\vspace{1in}

c. Solve for $y$ in terms of $x$.

\vspace{1in}

d. Find $\frac{dy}{dx}$ using the expression for $y$ you found above.

\vspace{1in}

e. Verify that these two formulas for $\frac{dy}{dx}$ are the same.

\newpage

__5.__  Suppose you have 128 kg of $^{14} C$, which has a half-life of 5730 years.


a. Write an equation to model the amount $A(t)$ of $^{14} C$ as a function
of time.

\vspace{1.5in}

b. Find the average rate of change in the amount over the first 5 half-lives
($5 \cdot 5730$ years).  Use a calculator to get approximate values.

\vspace{1.5in}

c. Find $A'(t)$.

\vspace{1.5in}

d. Calculate the rate of change (exact) at $t=0$, $t=2\cdot 5730$, and $t=5\cdot 5730$ years.
Use a calculator to get approximate values.


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
\draw (2.1098987656343007,2.0787989390191206) node[anchor=north west] {$8m$};
\draw (2.118141473229936,0.6033542794003506) node[anchor=north west] {$2m$};
\end{tikzpicture}

\vspace{-.7in}

Model the motion of a Ferris wheel with diamter 8m, sitting 2m off the ground.
Suppose you start ($t=0$) at the 9 o'clock position (furthest left on diagram),
traveling counter-clockwise, and that the period is 8 minutes.

a. Write parametric equations $x(t)$ and $y(t)$ to model the position 
as a function of time.


\vspace{1.5in}

b. Find $x'(t)$ and $y'(t)$.

\vspace{1in}

c. Evaluate $x'(t)$ and $y'(t)$ at the bottom position.

\vspace{1in}

d. Find $x''(t)$ and $y''(t)$.

\vspace{1in}

e. Evaluate $x''(t)$ and $y''(t)$ at the bottom position.

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

\vspace{-.25in}

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

\vspace{.1in}

Suppose that you launch a rocket straight up from the ground 
(i.e. at an angle of $\frac{\pi}{2}$), 
with an initial speed of $96$ ft/sec. 

\vspace{.25in}

a. Write equations for $x(t)$ and $y(t)$.

\vspace{1in}

b.  Find $x'(t)$ and $y'(t)$.  

\vspace{1in}

c.  Find $x''(t)$ and $y''(t)$.

\vspace{1in}

d.  Using the derivatives you found above, find the maximum height of
the rocket.

\vspace{1in}

e.  When does the rocket hit the ground, and how far has it traveled in the
x-direction?

\vspace{1in}




---
pagetitle: none
math: <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML-full" type="text/javascript"></script>
geometry: margin=1in
---


