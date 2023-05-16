from pathlib import Path

import pandas as pd


# FIRST STEP - download the .csv of responses from the google drive
# and move the file to the current directory,
# replacing the last version of the file

# load the .csv of responses
csv_path = Path(__file__).resolve().parent / "Collecting Open-Science Resources v3 (Responses) - Form Responses 1.csv"
df_original = pd.read_csv(csv_path)

# replace the complicated column names with simpler names, 
# and select only the columns we need
cols = {
    "Full name of resource": "name",
    "Website URL": "website",
    "GitHub URL": "github",
    "Documentation URL": "docs",
    # "Logo path": "logo",
    "Brief description (e.g, copy and paste their vision/purpose)": "description",
    "This resource falls under the category of": "tags",
    "Data Type": "modalities",
    "Where does your data come from?": "species",
    
}
df = pd.DataFrame(columns=list(cols.values()))
for old_col, new_col in cols.items():
    df[new_col] = df_original[old_col]
   
# for the categories that can have multiple options, 
# convert those options from a single string into a list 
list_cols = ["tags", "modalities", "species"]
for col in list_cols:
    for ind, row in df.iterrows():
        df.loc[ind, col] = row[col].split(sep=", ")

# save as json
json_path = Path(__file__).resolve().parent / "integrations.json"
df.to_json(json_path, orient="records")