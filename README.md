# simon-game
My first attempt at bulding something without a tutorial
 Simon Game — What I Actually Learned
1. Thinking in States, Not Just Code

I learned that apps don’t just “run” — they exist in states
(e.g. waiting, playing sequence, accepting user input, game over).

Bugs happened when I changed things without checking the current state.

Fixing issues became easier once I asked:
“What state is the app in right now?”

2. Flow Comes Before Code

I learned that jumping straight into coding causes confusion.

Writing the mental flow first made everything clearer:

Start game

Play sequence

Wait for user input

Check correctness

Advance or end game

I realized that every project follows a flow, no matter the language.

3. Pseudocode Is Not Optional

I learned that pseudocode is how you:

Clarify logic

Catch missing steps

Avoid rewriting everything later

When I skipped pseudocode, I got stuck.

When I wrote it, coding felt mechanical instead of stressful.

4. Arrays & Indexing Control Everything

I learned how arrays:

Store the game pattern

Track user clicks

Most bugs came from:

Wrong index comparisons

Checking too early or too late

I learned to compare step-by-step, not whole arrays blindly.

5. Timing & Order Matter More Than I Thought

I learned that:

Playing the sequence

Then enabling user input
must happen in the correct order

When these overlapped, the game broke.

I understood that async behavior (timeouts, delays) must be planned, not guessed.

6. Small Oversights Create Big Bugs

Examples of mistakes I learned from:

Game playing twice

Inputs being active when they shouldn’t be

State not resetting properly

These weren’t “logic failures” — they were missed edge cases.

7. Simplicity Is a Skill

I learned that:

More code ≠ better solution

Fewer variables = fewer bugs

Most fixes came from removing logic, not adding more.

Clean structure beat clever tricks every time.

8. Debugging Is a Structured Process

I learned to:

Stop guessing

Trace what actually happens step by step

Asking “what value is this right now?” became more useful than rewriting code.

9. Understanding Beats Copying

I learned that:

AI can help, but only if I understand why a solution works

Copying without understanding creates future confusion

Every bug forced me to understand fundamentals better.

10. Project Design Is About Knowing the “Ins and Outs”

I learned that saying:

“This app will do X”
is not enough.

I must know:

What happens first

What happens next

What can go wrong

How it resets

Real development is design before execution.
