


html:
	jb build .

view:
	open _build/html/index.html

pdf:
	jb build . --builder pdflatex

viewpdf:
	open _build/latex/book.pdf

learning_targets.odt: doc/topics.md
	pandoc $< -o $@

clean:
	jb clean .
	rm -f learning_targets.odt


# $* stem of implicit rule match 
# $@ target 
# $< first prerequisite

