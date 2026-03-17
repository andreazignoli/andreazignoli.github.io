#!/usr/bin/env python3
"""
Extract selected columns from OCP result .txt file and save as CSV.

Usage:
    python3 extract_columns.py [input_file] [output_file]

Defaults:
    input_file  = OCP_RoadSprint_bio_model_OCP_result.txt
    output_file = output.csv
"""

import csv
import json
import sys
import os

# ── Configure columns to keep here ────────────────────────────────────────────
COLUMNS_TO_KEEP = [
    "zeta",
    "kappa",
    "n",
    "alpha",
    "u",
    "W__n",
    "Power",
    "ax",
    "ay",
    "xCoM",
    "yCoM",
    "xLane",
    "yLane",
    "xLeftEdge",
    "yLeftEdge",
    "xRightEdge",
    "yRightEdge",
    "slope",
    "time",
    "phi",
]
# ──────────────────────────────────────────────────────────────────────────────

script_dir = os.path.dirname(os.path.abspath(__file__))
default_input  = os.path.join(script_dir, "OCP_RoadSprint_bio_model_OCP_result.txt")
default_output = os.path.join(script_dir, "output.json")

input_file  = sys.argv[1] if len(sys.argv) > 1 else default_input
output_file = sys.argv[2] if len(sys.argv) > 2 else default_output

with open(input_file, "r") as f:
    lines = f.readlines()

# Skip comment lines and find the header row (first non-comment line)
data_lines = [l for l in lines if not l.startswith("#")]
if not data_lines:
    raise ValueError("No data found after stripping comment lines.")

header = data_lines[0].rstrip("\n").split("\t")
rows   = [l.rstrip("\n").split("\t") for l in data_lines[1:] if l.strip()]

# Resolve column indices
missing = [c for c in COLUMNS_TO_KEEP if c not in header]
if missing:
    print(f"WARNING: columns not found in file: {missing}")
    print(f"Available columns: {header}")

indices = [header.index(c) for c in COLUMNS_TO_KEEP if c in header]
kept_cols = [header[i] for i in indices]

# Compute elevation z by integrating slope (rise/run) over arc-length zeta.
# z starts at 0; negative slope = downhill (z decreases).
# Use this z with xCoM/yCoM and edge coordinates to get full 3D positions.
zeta_idx = header.index("zeta")
slope_idx = header.index("slope")

z_values = [0.0]
for i in range(1, len(rows)):
    d_zeta = float(rows[i][zeta_idx]) - float(rows[i - 1][zeta_idx])
    z_values.append(z_values[-1] + float(rows[i][slope_idx]) * d_zeta)

all_cols = kept_cols + ["z"]

records = []
for i, row in enumerate(rows):
    values = [float(row[j]) for j in indices] + [round(z_values[i], 6)]
    records.append(dict(zip(all_cols, values)))

with open(output_file, "w") as f:
    json.dump(records, f, separators=(",", ":"))

print(f"Done. {len(records)} records written to {output_file}")
print(f"Columns: {all_cols}")
