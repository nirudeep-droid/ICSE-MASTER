# How to Add Questions to Tests — Complete Guide

This guide shows all 3 methods to add questions to your test in the ICSE Master admin panel.

---

## Method 1: Add Questions One-by-One (Manual Entry)

**Best for:** Small number of questions (1-10), when you want to review each question before adding.

### Step-by-Step:

1. **Open Admin Panel**
   - Go to your admin dashboard
   - Navigate to **Questions** section from the left sidebar

2. **Click "Add Question" Button**
   - Look for the blue "+ Add Question" button at the top
   - A modal form will open

3. **Fill in Question Details**

   | Field | Description | Example |
   |-------|-------------|---------|
   | **Test** | Select which test this question belongs to | Select your test from dropdown |
   | **Question Text** | The actual question | "What is the capital of India?" |
   | **Option 1** | First multiple choice option | "Mumbai" |
   | **Option 2** | Second multiple choice option | "New Delhi" |
   | **Option 3** | Third multiple choice option | "Bangalore" |
   | **Option 4** | Fourth multiple choice option | "Kolkata" |
   | **Correct Option** | Which option is correct (0, 1, 2, or 3) | 1 (for "New Delhi") |
   | **Explanation** | Why this answer is correct | "New Delhi is the capital of India since 1931" |

4. **Save the Question**
   - Click the blue "Save Question" button
   - You'll see a success message
   - The question is now added to your test

5. **Add More Questions**
   - Repeat steps 2-4 for each question
   - The form will clear after each save

### Example:

```
Test: Grade 9 - History Chapter 1
Question Text: Which year did India gain independence?
Option 1: 1945
Option 2: 1947
Option 3: 1950
Option 4: 1952
Correct Option: 1 (1947)
Explanation: India gained independence from British rule on August 15, 1947
```

---

## Method 2: Bulk Import from CSV (Recommended for Many Questions)

**Best for:** Adding 20+ questions at once, importing from external sources.

### Step 1: Download CSV Template

1. Go to **Questions** section
2. Click **"Download CSV Template"** button
3. A file named `questions_template.csv` will download to your computer

### Step 2: Fill in the CSV File

Open the CSV file in Excel, Google Sheets, or any text editor. The format is:

```
Question Text,Option 1,Option 2,Option 3,Option 4,Correct Option (0-3),Explanation
```

**Important:** 
- Correct Option must be 0, 1, 2, or 3 (not the text)
- If your text contains commas, wrap it in quotes: `"What is 2+2, and why?"`
- Don't include the header row in your import (it's just for reference)

### Example CSV File:

```csv
"What is the capital of India?","Mumbai","New Delhi","Bangalore","Kolkata",1,"New Delhi is the capital of India since 1931"
"Which planet is closest to the sun?","Venus","Mercury","Earth","Mars",1,"Mercury is the closest planet to the sun"
"What is the chemical symbol for Gold?","Au","Ag","Go","Gd",0,"Au is the chemical symbol for Gold (from Latin 'aurum')"
"Who wrote Romeo and Juliet?","William Shakespeare","Jane Austen","Charles Dickens","Mark Twain",0,"William Shakespeare wrote Romeo and Juliet in 1594-1596"
"What is the largest ocean?","Atlantic","Indian","Arctic","Pacific",3,"The Pacific Ocean is the largest ocean on Earth"
```

### Step 3: Upload the CSV File

1. Go to **Questions** section
2. Click **"Import CSV"** button
3. A modal will open with:
   - Drag-and-drop area (drag your CSV file here)
   - Or click to browse and select file

4. Select your filled CSV file
5. Click **"Parse CSV"** button

### Step 4: Review Preview

The system will show:
- **Preview Table**: First 10 questions from your file
- **Validation Results**: 
  - ✅ Green: Valid questions
  - ❌ Red: Errors (shows which rows have problems)

**Common Errors:**
- Missing columns (need all 7 columns)
- Correct option not 0-3
- Empty question text
- Too many/few options

### Step 5: Fix Errors (if any)

If there are errors:
1. Go back to your CSV file
2. Fix the problematic rows
3. Re-upload and preview again

### Step 6: Import Questions

Once preview shows all green ✅:
1. Click **"Import"** button
2. Progress bar shows import status
3. Questions are added in batches (100 at a time)
4. Success message shows how many questions were imported

### Example: Complete CSV with 5 Questions

```csv
"What is the capital of India?","Mumbai","New Delhi","Bangalore","Kolkata",1,"New Delhi is the capital of India"
"Which planet is closest to the sun?","Venus","Mercury","Earth","Mars",1,"Mercury is the closest planet"
"What is the chemical symbol for Gold?","Au","Ag","Go","Gd",0,"Au is the chemical symbol for Gold"
"Who wrote Romeo and Juliet?","William Shakespeare","Jane Austen","Charles Dickens","Mark Twain",0,"William Shakespeare wrote this play"
"What is the largest ocean?","Atlantic","Indian","Arctic","Pacific",3,"The Pacific Ocean is the largest"
```

---

## Method 3: Manual CSV Upload (Advanced)

**Best for:** When you already have questions in a CSV file from another system.

### Step 1: Prepare Your CSV File

Format your CSV exactly like this:

```
Question Text,Option 1,Option 2,Option 3,Option 4,Correct Option (0-3),Explanation
```

**Rules:**
- **Row 1**: Headers (optional, but recommended)
- **Rows 2+**: Your questions
- **Columns**: Must be exactly 7 columns in this order
- **Correct Option**: Use 0, 1, 2, or 3 (index of correct option)
- **Quotes**: Use double quotes if text contains commas or quotes

### Step 2: Upload to Admin Panel

1. Navigate to **Questions** section
2. Click **"Import CSV"** button
3. Drag your CSV file into the drop zone OR click to browse
4. Click **"Parse CSV"**

### Step 3: Validate

The system will:
- Parse all rows
- Check for missing columns
- Validate correct option values (0-3)
- Show errors with row numbers

### Step 4: Review & Import

- Check the preview table
- If all green ✅, click **"Import"**
- Monitor progress bar
- See success summary

### Example: 10 Questions CSV

```csv
Question Text,Option 1,Option 2,Option 3,Option 4,Correct Option (0-3),Explanation
"What is 2+2?","3","4","5","6",1,"2+2 equals 4"
"What is the chemical formula for water?","H2O","H2O2","HO","H3O",0,"Water is H2O (hydrogen and oxygen)"
"Which is the largest continent?","Africa","Asia","Europe","North America",1,"Asia is the largest continent"
"What is the speed of light?","300,000 km/s","150,000 km/s","450,000 km/s","600,000 km/s",0,"Light travels at 300,000 km/s"
"Who is the author of Harry Potter?","J.K. Rowling","Stephen King","George R.R. Martin","J.R.R. Tolkien",0,"J.K. Rowling wrote the Harry Potter series"
"What is the smallest prime number?","0","1","2","3",2,"2 is the smallest prime number"
"Which country has the most population?","India","China","USA","Indonesia",1,"China and India have the most population (China slightly more)"
"What is the boiling point of water?","90°C","100°C","110°C","120°C",1,"Water boils at 100°C at sea level"
"Who painted the Mona Lisa?","Leonardo da Vinci","Michelangelo","Raphael","Donatello",0,"Leonardo da Vinci painted the Mona Lisa"
"What is the capital of France?","Lyon","Marseille","Paris","Nice",2,"Paris is the capital of France"
```

---

## Comparison: Which Method to Use?

| Method | Speed | Best For | Difficulty |
|--------|-------|----------|------------|
| **Manual (1-by-1)** | Slow | Few questions, careful review | Easy |
| **CSV Import** | Fast | Many questions, bulk add | Medium |
| **CSV Upload** | Very Fast | Pre-existing questions | Medium |

---

## Troubleshooting

### "Test not found" error
- Make sure you selected a test from the dropdown
- Test must be created first before adding questions

### "Invalid correct option" error
- Correct Option must be 0, 1, 2, or 3
- 0 = Option 1, 1 = Option 2, 2 = Option 3, 3 = Option 4

### "Missing columns" error
- Your CSV must have exactly 7 columns
- Check that you have: Question, Opt1, Opt2, Opt3, Opt4, Correct, Explanation

### CSV won't parse
- Make sure file is saved as `.csv` (not `.xlsx` or `.xls`)
- Check for special characters or encoding issues
- Try opening in a text editor to verify format

### Questions not appearing after import
- Refresh the page
- Check that you selected the correct test
- Verify import showed "success" message

---

## Tips & Best Practices

✅ **Do:**
- Test with a small batch first (5-10 questions)
- Review the preview before importing
- Use clear, concise question text
- Provide detailed explanations
- Use consistent formatting

❌ **Don't:**
- Leave explanation blank (students need to learn why)
- Use very long question text (keep under 200 characters)
- Mix different question types in one import
- Include special characters without quotes

---

## Need Help?

If you encounter issues:
1. Check the error message carefully
2. Review the row number mentioned in the error
3. Fix that row in your CSV
4. Re-upload and try again

For more help, contact the admin support team.
