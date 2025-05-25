# Marp Build Commands
# ==================

# Variables
MARP_CLI = npx @marp-team/marp-cli
INPUT_FILE = example.md
THEME_DIR = themes
OUTPUT_DIR = dist
PDF_OUTPUT = $(OUTPUT_DIR)/example.pdf
HTML_OUTPUT = $(OUTPUT_DIR)/example.html

# Default target
.PHONY: all
all: pdf html

# Create output directory
$(OUTPUT_DIR):
	mkdir -p $(OUTPUT_DIR)

# Build PDF
.PHONY: pdf
pdf: $(OUTPUT_DIR)
	$(MARP_CLI) $(INPUT_FILE) \
		--theme-set $(THEME_DIR)/ai_friendly.css \
		--pdf \
		--output $(PDF_OUTPUT) \
		--allow-local-files

# Build HTML
.PHONY: html
html: $(OUTPUT_DIR)
	$(MARP_CLI) $(INPUT_FILE) \
		--theme-set $(THEME_DIR)/ai_friendly.css \
		--html \
		--output $(HTML_OUTPUT) \
		--allow-local-files

# Preview in browser
.PHONY: preview
preview:
	$(MARP_CLI) $(INPUT_FILE) \
		--theme-set $(THEME_DIR)/ai_friendly.css \
		--preview \
		--allow-local-files

# Clean output directory
.PHONY: clean
clean:
	rm -rf $(OUTPUT_DIR)

# Install Marp CLI if not present
.PHONY: install
install:
	npm install -g @marp-team/marp-cli

# Help
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make pdf      - Build PDF output"
	@echo "  make html     - Build HTML output"
	@echo "  make all      - Build both PDF and HTML"
	@echo "  make preview  - Preview in browser"
	@echo "  make clean    - Clean output directory"
	@echo "  make install  - Install Marp CLI globally"
	@echo "  make help     - Show this help message"
