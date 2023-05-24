from pathlib import Path

import pandas as pd

# import IPython


# FIRST STEP - download the .csv of responses from the google drive
# and move the file to the current directory,
# replacing the last version of the file

# load the .csv of responses
csv_path = Path(__file__).resolve().parent / "Collecting Open-Science Resources v3 (Responses) - Form Responses 1.csv"
df_original = pd.read_csv(csv_path)

# replace the complicated column names with simpler names, 
# and select only the columns we need
cols_no_split = {
    "Full name of resource": "name",
    "Website URL": "website",
    "GitHub URL": "github",
    "Documentation URL": "docs",
    "Logo Filename": "logo",
    "Brief description (e.g, copy and paste their vision/purpose)": "description",    
}
cols_to_split = {
    "This resource falls under the category of ": "tags",
    "Data Type (Select all that apply)": "modalities",
    "Where does your data come from? (Select all that apply)": "species",
}
all_cols = list(cols_no_split.values()) + list(cols_to_split.values())
df = pd.DataFrame(columns=all_cols).astype(object)
for old_col, new_col in cols_no_split.items():
    df[new_col] = df_original[old_col]
   
# for the categories that can have multiple options, 
# convert those options from a single string into a list 
for old_col, new_col in cols_to_split.items():
    for ind, row in df.iterrows():
        item_str = df_original.loc[ind, old_col]
        item = item_str.split(sep=", ")
        df.at[ind, new_col] = item

# save as json
json_path = Path(__file__).resolve().parent / "integrations.json"
df.to_json(json_path, orient="records")