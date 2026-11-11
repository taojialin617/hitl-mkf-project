# HitL-MKF

Research project page for **HitL-MKF: Human-in-the-Loop Multi-level Knowledge Fusion for Domain Knowledge Graph Construction using Large Language Models**, accepted in *Results in Engineering* (2026).

[Project page](https://taojialin617.github.io/hitl-mkf-project/) · [Paper](https://www.sciencedirect.com/science/article/pii/S2590123026050632)

## Overview

HitL-MKF connects expert adjudication of uncertain fusion decisions with entity alignment, path fusion, and Two-Stage GraphRAG. It constructs a knowledge graph from 1,421 maintenance work orders and evaluates diagnostic answers on 209 held-out questions from one CNC manufacturer.

The complete framework achieves BERT-F1 **0.6493** and Judge Score **8.1109 ± 0.0668**, with the latter summarized over five scoring rounds. These are descriptive results for the evaluated dataset.

## Website

This repository contains the project website, paper figure assets, and bibliographic metadata. It does not contain the research implementation or industrial work-order data. Interactive examples are illustrations, not live diagnostic services.

- `index.html`: page content
- `style.css`: responsive design
- `script.js`: method tabs, result comparison, illustrative field completion, figure zoom, citation copy
- `paper.js` and `citation.bib`: paper metadata
- `assets/`: public-facing paper figures and visual assets

No build or package installation is required. To preview, serve this directory with any static HTTP server. For example, `python -m http.server 8000`, then open `http://localhost:8000`.

## Data and code availability

The maintenance work-order data used to construct the knowledge graph are currently not publicly available because they contain confidential company information. The evaluation datasets, including the 209-question diagnostic test set and the set of 100 candidate entity pairs for fusion evaluation, are available on request. The code is also available on request, with confidential company information removed. Contact the authors through the published paper.

## Deployment

The site uses relative asset paths and supports GitHub Pages under a project subdirectory. Enable Pages with `main` as the source branch and `/ (root)` as the folder. `.nojekyll` keeps deployment buildless.

## Attribution

The research text, results, and original figures are attributed to the authors of the linked paper. Reuse of publication content is subject to its applicable terms; no additional license for the research data or implementation is granted by this website.
