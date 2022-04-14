using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wordle2
{
    class Program
    {
        static readonly Dictionary<int, string> OrdinalNumbers = new Dictionary<int, string>()
        {
            { 1, "first"},
            { 2, "second" },
            { 3, "third" },
            { 4, "fourth" },
            { 5, "fifth" }
        };

        static void Main(string[] args)
        {
            //find remaining words
            List<string> words = GetAllWords();
            bool exitProgram = false;

            while (!exitProgram)
            {
                //letters that ARE in the word
                List<char> letters = GetLetters(false);
                while (letters.Count() > 0)
                {
                    char checkForLetter = letters.First();
                    words = words.Where(word => word.Contains(checkForLetter)).ToList();
                    letters = letters.Where(letter => letter != checkForLetter).ToList();

                    Console.WriteLine($"Check for words with {checkForLetter}");
                    Console.WriteLine($"{words.Count()} possibilities left");
                    if (words.Count() == 1)
                    {
                        exitProgram = true;
                        break;
                    }
                }

                //letters that are NOT in the word
                if (!exitProgram)
                {
                    Console.WriteLine();
                    List<char> excludeLetters = GetLetters(true);
                    while (excludeLetters.Count() > 0)
                    {
                        char checkForLetter = excludeLetters.First();
                        words = words.Where(word => !word.Contains(checkForLetter)).ToList();
                        excludeLetters = excludeLetters.Where(letter => letter != checkForLetter).ToList();

                        Console.WriteLine($"Check for words without {checkForLetter}");
                        Console.WriteLine($"{words.Count()} possibilities left");
                        if (words.Count() == 1)
                        {
                            exitProgram = true;
                            break;
                        }
                    }
                }

                Console.WriteLine();
                Console.WriteLine("Do you know the position of any of the letters?");
                ConsoleKey response = Console.ReadKey().Key;
                if (response == ConsoleKey.Y)
                {
                    for (int i = 0; i < 5; i++)
                    {
                        Console.WriteLine();
                        if (TryGetNthLetter(i, out char letter))
                        {
                            OrdinalNumbers.TryGetValue(i + 1, out string ordinal); //i+1 - array starts at 0
                            words = words.Where(word => word[i] == letter).ToList();

                            Console.WriteLine($"Check for {letter} on {ordinal} position");
                            Console.WriteLine($"{words.Count()} possibilities left");

                            if (words.Count() == 1)
                            {
                                exitProgram = true;
                                break;
                            }
                        }
                    }
                }

                //still no anwer? Try a word! 
                Console.WriteLine("I still don't know the answer for sure.");
                int guessNo = 0;
                bool guessing = true;
                while (guessing)
                {
                    Console.WriteLine();
                    Console.WriteLine($"Try: {BestGuess(words, guessNo)}");
                    Console.WriteLine("Press escape to exit,");
                    Console.WriteLine("press enter to get another guess,");
                    Console.WriteLine("press 'E'  to exclude this guess from the wordlist, and get another one");
                    Console.WriteLine("or press any other key to retry with new information.");
                    ConsoleKey key = Console.ReadKey().Key;
                    switch (key)
                    {
                        case ConsoleKey.Escape:
                            exitProgram = false;
                            guessing = false;
                            break;
                        case ConsoleKey.Enter:
                            guessNo++;
                            break;
                        case ConsoleKey.E:
                            File.AppendAllText("exclude.txt", words[guessNo] + Environment.NewLine);
                            guessNo++;
                            break;
                        default:
                            guessing = false;
                            break;
                    }
                }
            }
        
            //exitProgram = true
            if (words.Count() == 1)
            {
                Console.WriteLine("Answer found!");
                Console.WriteLine($"It is: {words.First()}");
            }
            else
            {
                Console.WriteLine("Word not found. Better luck next time!");
            }
        }

        private static string BestGuess(List<string> words, int guessNo)
        {
            //ToDO make something more intelligent
            return words[guessNo];
        }

        private static List<string> GetAllWords()
        {
            string[] words = File.ReadAllLines("words2.txt");
            //string[] excludeWords = File.ReadAllLines("exclude.txt");
            List<string> fiveLetterWords = words.Select(word => word.ToLower()).Where(word => word.Length == 5).ToList();

            return fiveLetterWords;//Where(word => !excludeWords.Contains(word)).ToList();
        }

        private static List<char> GetLetters(bool exclude)
        {
            //ask what letters to contain 
            if (!exclude)
            {
                Console.Write("What letters are in the word? (seperated by only a comma)");
            }
            else
            {
                Console.Write("What letters are NOT in the word? (seperated by only a comma)");
            }
            string response = Console.ReadLine().ToLower();
            List<char> letters = new List<char>();
            if (response != "")
            {
                letters = response.Split(',').Select(letter => char.Parse(letter)).ToList();
            }

            //check response
            //TODO

            return letters.ToList();
        }

        private static bool TryGetNthLetter(int i, out char letter)
        {
            letter = new char();
            OrdinalNumbers.TryGetValue(i + 1, out string ordinal); //i+1 - array starts at 0
            Console.WriteLine($"Do you know the {ordinal} letter?");
            Console.WriteLine("(press 'y' or 'n')");
            ConsoleKey response = Console.ReadKey().Key;
            if (response == ConsoleKey.Y) 
            {
                Console.WriteLine($" - Nice! What is the {ordinal} letter?");
                letter = Console.ReadKey().KeyChar;
                Console.WriteLine();
                return true;
            }
            else
            {
                Console.WriteLine(" - That's okay!");
                letter = new char();
                return false;
            }

            //check response
            //TODO
            // choose from  ..?
        }
    }
}
