Review Marp slides visually by exporting them as PNG images and analyzing each slide.

## Instructions

The target file is: $ARGUMENTS

If no file is specified (i.e., "$ARGUMENTS" is empty or blank), display the following error and stop:

> Error: No target file specified. Usage: `/review-slides <file.md>`

Otherwise, proceed with the following steps:

### Step 1: Validate the file

1. Read the target file using the Read tool.
2. Confirm that the file contains `marp: true` in its YAML front matter. If not, display an error and stop.

### Step 2: Export slides as PNG images

Run the following command using the Bash tool:

```
npx @marp-team/marp-cli $ARGUMENTS --theme-set themes/ai_friendly.css --images png --image-scale 2 --output dist/ --allow-local-files
```

If the command fails, display the error output and stop.

### Step 3: Load all exported PNG images

Use the Glob tool to find all `.png` files in the `dist/` directory. Then use the Read tool to read each PNG image file. Claude's multimodal capabilities will allow you to see the rendered slide content.

Read all images in parallel for efficiency.

### Step 4: Review each slide

For each slide image, evaluate the following aspects:

- **Margins/Whitespace**: Is content too close to edges, or is there excessive unused space?
- **Text overflow/clipping**: Is any text cut off, overflowing, or extending beyond slide boundaries?
- **Image placement and sizing**: Are images properly positioned and appropriately sized?
- **Layout balance**: Is the overall composition well-balanced?
- **Readability**: Are font sizes adequate? Is there sufficient contrast?
- **Math rendering**: If mathematical formulas are present, are they rendered correctly?

### Step 5: Output the review

Produce the review in **English** with the following structure:

1. **Per-slide findings**: For each slide, list the slide number, a brief description of the slide content, and any issues or observations from the evaluation criteria above. If a slide has no issues, note that it looks good.

2. **Overall summary**: Provide a summary of common issues across slides, overall quality assessment, and prioritized recommendations for improvement.
