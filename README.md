import random

print("===== ROCK - PAPER - SCISSORS GAME =====")

# Initialize scores
user_score = 0
computer_score = 0

# Choices available
choices = ["rock", "paper", "scissors"]

while True:
    # Step 1: Get user input
    user_choice = input("\nEnter your choice (rock/paper/scissors): ").lower()
    if user_choice not in choices:
        print("Invalid choice! Please choose rock, paper, or scissors.")
        continue

    # Step 2: Generate computer choice
    computer_choice = random.choice(choices)

    # Step 3: Display both choices
    print(f"You chose: {user_choice}")
    print(f"Computer chose: {computer_choice}")

    # Step 4: Determine winner
    if user_choice == computer_choice:
        print("It's a tie!")
    elif (user_choice == "rock" and computer_choice == "scissors") or \
         (user_choice == "paper" and computer_choice == "rock") or \
         (user_choice == "scissors" and computer_choice == "paper"):
        print("🎉 You win this round!")
        user_score += 1
    else:
        print("💻 Computer wins this round!")
        computer_score += 1

    # Step 5: Display current score
    print(f"Score -> You: {user_score} | Computer: {computer_score}")

    # Step 6: Ask if user wants to play again
    play_again = input("\nDo you want to play again? (yes/no): ").lower()
    if play_again != "yes":
        print("\n===== FINAL SCORE =====")
        print(f"You: {user_score} | Computer: {computer_score}")
        if user_score > computer_score:
            print("🎉 You won the game overall!")
        elif user_score < computer_score:
            print("💻 Computer won the game overall!")
        else:
            print("It's a tie overall!")
        print("Thanks for playing! 👋")
        break
