#
# Makefile
#

# $* stem of implicit rule match 
# $@ target 
# $< first prerequisite


pdf_targets = $(patsubst %.md,%.pdf,$(wildcard *.md))

targets = $(pdf_targets)

all: $(targets)
	@echo Targets: $(targets)

%.pdf: %.md
	pandoc $< -o $@ 

clean:
	rm -f $(targets)


