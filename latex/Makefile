DOCKER_IMAGE := texlive/texlive:latest
LATEX        := lualatex
LATEXFLAGS   := -interaction=nonstopmode -halt-on-error

REPO_ROOT    := $(shell cd .. && pwd)
OUT_DIR      := $(REPO_ROOT)/public/images

.PHONY: all cv resume compact clean

all: cv resume

cv:
	@echo "==> Compiling CV..."
	docker run --rm \
		-v "$(REPO_ROOT)/latex/CV:/workdir" \
		-w /workdir \
		$(DOCKER_IMAGE) \
		sh -c "mkdir -p /usr/local/share/fonts && cp /workdir/Ubuntu/*.ttf /usr/local/share/fonts/ && fc-cache -f && luaotfload-tool --update --quiet; $(LATEX) $(LATEXFLAGS) main.tex && $(LATEX) $(LATEXFLAGS) main.tex"
	cp "$(REPO_ROOT)/latex/CV/main.pdf" "$(OUT_DIR)/Andrea_CV.pdf"
	@echo "==> CV written to $(OUT_DIR)/Andrea_CV.pdf"

resume:
	@echo "==> Compiling Resume..."
	docker run --rm \
		-v "$(REPO_ROOT)/latex/resume:/workdir" \
		-w /workdir \
		$(DOCKER_IMAGE) \
		sh -c "$(LATEX) $(LATEXFLAGS) azignoli.tex && biber azignoli && $(LATEX) $(LATEXFLAGS) azignoli.tex && $(LATEX) $(LATEXFLAGS) azignoli.tex"
	cp "$(REPO_ROOT)/latex/resume/azignoli.pdf" "$(OUT_DIR)/Andrea_Resume.pdf"
	@echo "==> Resume written to $(OUT_DIR)/Andrea_Resume.pdf"

compact:
	@echo "==> Compiling Compact CV..."
	docker run --rm \
		-v "$(REPO_ROOT)/latex/CV:/workdir" \
		-w /workdir \
		$(DOCKER_IMAGE) \
		sh -c "mkdir -p /usr/local/share/fonts && cp /workdir/Ubuntu/*.ttf /usr/local/share/fonts/ && fc-cache -f && luaotfload-tool --update --quiet; $(LATEX) $(LATEXFLAGS) compact.tex && $(LATEX) $(LATEXFLAGS) compact.tex"
	@echo "==> Compact CV written to latex/CV/compact.pdf (not committed)"

clean:
	rm -f CV/*.{aux,bbl,bcf,blg,log,out,run.xml,toc} \
	      resume/*.{aux,bbl,bcf,blg,log,out,run.xml,toc}
