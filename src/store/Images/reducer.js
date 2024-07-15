import {
    GET_QUESTION_AND_ANSWERS_SUCCESS,
    GET_SAVED_QUESTION_AND_ANSWERS_SUCCESS,
    GET_ON_SUBMIT_RESULT_SUCCESS,
    GET_SUBJECT_ID,
} from "./actionTypes";

const initialState = {
    questionsAndAnswers: [
        { id: "1", question: "What is the powerhouse of the cell?", options: { 1: "Nucleus", 2: "Ribosome", 3: "Mitochondria", 4: "Endoplasmic Reticulum" }, answer: 3, userValue: null, subjectId: 1 },
        { id: "2", question: "What is the basic unit of life?", options: { 1: "Cell", 2: "Tissue", 3: "Organ", 4: "Organ System" }, answer: 1, userValue: null, subjectId: 1 },
        { id: "3", question: "Which molecule carries genetic information?", options: { 1: "RNA", 2: "DNA", 3: "Protein", 4: "Lipid" }, answer: 2, userValue: null, subjectId: 1 },
        { id: "4", question: "Which process do plants use to make food?", options: { 1: "Respiration", 2: "Transpiration", 3: "Photosynthesis", 4: "Fermentation" }, answer: 3, userValue: null, subjectId: 1 },
        { id: "5", question: "What is the primary function of red blood cells?", options: { 1: "Fight infections", 2: "Transport oxygen", 3: "Clot blood", 4: "Regulate body temperature" }, answer: 2, userValue: null, subjectId: 1 },
        { id: "6", question: "Which organ is responsible for pumping blood throughout the body?", options: { 1: "Lungs", 2: "Liver", 3: "Heart", 4: "Kidneys" }, answer: 3, userValue: null, subjectId: 1 },
        { id: "7", question: "Which system controls body movement?", options: { 1: "Respiratory System", 2: "Digestive System", 3: "Nervous System", 4: "Circulatory System" }, answer: 3, userValue: null, subjectId: 1 },
        { id: "8", question: "What is the largest organ in the human body?", options: { 1: "Heart", 2: "Liver", 3: "Skin", 4: "Lung" }, answer: 3, userValue: null, subjectId: 1 },
        { id: "9", question: "What type of macromolecule are enzymes?", options: { 1: "Lipids", 2: "Proteins", 3: "Carbohydrates", 4: "Nucleic Acids" }, answer: 2, userValue: null, subjectId: 1 },
        { id: "10", question: "Which structure is responsible for protein synthesis?", options: { 1: "Lysosome", 2: "Ribosome", 3: "Golgi Apparatus", 4: "Mitochondria" }, answer: 2, userValue: null, subjectId: 1 },
        { id: "11", question: "Which blood type is known as the universal donor?", options: { 1: "A", 2: "B", 3: "AB", 4: "O" }, answer: 4, userValue: null, subjectId: 1 },
        { id: "12", question: "What is the primary function of white blood cells?", options: { 1: "Transport oxygen", 2: "Transport nutrients", 3: "Fight infections", 4: "Remove waste" }, answer: 3, userValue: null, subjectId: 1 },
        { id: "13", question: "Where does fertilization usually occur in humans?", options: { 1: "Uterus", 2: "Ovary", 3: "Fallopian Tube", 4: "Vagina" }, answer: 3, userValue: null, subjectId: 1 },
        { id: "14", question: "Which part of the brain controls balance and coordination?", options: { 1: "Cerebrum", 2: "Cerebellum", 3: "Medulla", 4: "Hypothalamus" }, answer: 2, userValue: null, subjectId: 1 },
        { id: "15", question: "What is the main component of plant cell walls?", options: { 1: "Cellulose", 2: "Chitin", 3: "Glycogen", 4: "Starch" }, answer: 1, userValue: null, subjectId: 1 },

        { id: "1", question: "Who was the first President of the United States?", options: { 1: "Thomas Jefferson", 2: "Abraham Lincoln", 3: "George Washington", 4: "John Adams" }, answer: 3, userValue: null, subjectId: 2 },
        { id: "2", question: "In which year did the Titanic sink?", options: { 1: "1912", 2: "1905", 3: "1920", 4: "1915" }, answer: 1, userValue: null, subjectId: 2 },
        { id: "3", question: "Which empire was known as the 'Holy Roman Empire'?", options: { 1: "Ottoman Empire", 2: "Byzantine Empire", 3: "Holy Roman Empire", 4: "Mongol Empire" }, answer: 3, userValue: null, subjectId: 2 },
        { id: "4", question: "Who was the first man to step on the moon?", options: { 1: "Yuri Gagarin", 2: "Buzz Aldrin", 3: "Neil Armstrong", 4: "John Glenn" }, answer: 3, userValue: null, subjectId: 2 },
        { id: "5", question: "What was the primary cause of the American Civil War?", options: { 1: "Taxation", 2: "Slavery", 3: "Territorial Expansion", 4: "Trade Disputes" }, answer: 2, userValue: null, subjectId: 2 },
        { id: "6", question: "Which ancient civilization built the pyramids?", options: { 1: "Aztec", 2: "Inca", 3: "Maya", 4: "Egyptian" }, answer: 4, userValue: null, subjectId: 2 },
        { id: "7", question: "In which year did World War II begin?", options: { 1: "1939", 2: "1941", 3: "1935", 4: "1945" }, answer: 1, userValue: null, subjectId: 2 },
        { id: "8", question: "Who was known as the 'Maid of Orleans'?", options: { 1: "Queen Elizabeth I", 2: "Marie Antoinette", 3: "Joan of Arc", 4: "Catherine the Great" }, answer: 3, userValue: null, subjectId: 2 },
        { id: "9", question: "What event marked the beginning of the Great Depression?", options: { 1: "Black Tuesday", 2: "World War I", 3: "The Dust Bowl", 4: "The New Deal" }, answer: 1, userValue: null, subjectId: 2 },
        { id: "10", question: "Which explorer is credited with discovering America in 1492?", options: { 1: "Ferdinand Magellan", 2: "Christopher Columbus", 3: "Vasco da Gama", 4: "Leif Erikson" }, answer: 2, userValue: null, subjectId: 2 },
        { id: "11", question: "Who was the British Prime Minister during World War II?", options: { 1: "Neville Chamberlain", 2: "Winston Churchill", 3: "Clement Attlee", 4: "Harold Macmillan" }, answer: 2, userValue: null, subjectId: 2 },
        { id: "12", question: "What was the name of the ship that brought the Pilgrims to America in 1620?", options: { 1: "Santa Maria", 2: "Mayflower", 3: "Pinta", 4: "Nina" }, answer: 2, userValue: null, subjectId: 2 },
        { id: "13", question: "Which war was fought between the North and South regions in the United States?", options: { 1: "World War I", 2: "World War II", 3: "American Revolutionary War", 4: "American Civil War" }, answer: 4, userValue: null, subjectId: 2 },
        { id: "14", question: "Who was the first female Prime Minister of the United Kingdom?", options: { 1: "Margaret Thatcher", 2: "Theresa May", 3: "Angela Merkel", 4: "Indira Gandhi" }, answer: 1, userValue: null, subjectId: 2 },
        { id: "15", question: "What was the name of the first artificial Earth satellite?", options: { 1: "Apollo 11", 2: "Voyager", 3: "Sputnik", 4: "Hubble" }, answer: 3, userValue: null, subjectId: 2 },

        { id: "1", question: "What is the chemical symbol for water?", options: { 1: "H2O", 2: "CO2", 3: "O2", 4: "N2" }, answer: 1, userValue: null, subjectId: 3 },
        { id: "2", question: "What is the atomic number of carbon?", options: { 1: "6", 2: "8", 3: "12", 4: "14" }, answer: 1, userValue: null, subjectId: 3 },
        { id: "3", question: "Which element is known as the 'King of Chemicals'?", options: { 1: "Hydrogen", 2: "Oxygen", 3: "Sulfuric Acid", 4: "Sodium" }, answer: 3, userValue: null, subjectId: 3 },
        { id: "4", question: "What is the common name for sodium chloride?", options: { 1: "Baking Soda", 2: "Bleach", 3: "Table Salt", 4: "Sugar" }, answer: 3, userValue: null, subjectId: 3 },
        { id: "5", question: "Which gas is produced during photosynthesis?", options: { 1: "Carbon Dioxide", 2: "Nitrogen", 3: "Oxygen", 4: "Methane" }, answer: 3, userValue: null, subjectId: 3 },
        { id: "6", question: "What is the pH level of pure water?", options: { 1: "5", 2: "6", 3: "7", 4: "8" }, answer: 3, userValue: null, subjectId: 3 },
        { id: "7", question: "Which element has the highest melting point?", options: { 1: "Iron", 2: "Tungsten", 3: "Gold", 4: "Silver" }, answer: 2, userValue: null, subjectId: 3 },
        { id: "8", question: "What is the most abundant gas in the Earth's atmosphere?", options: { 1: "Oxygen", 2: "Carbon Dioxide", 3: "Nitrogen", 4: "Argon" }, answer: 3, userValue: null, subjectId: 3 },
        { id: "9", question: "Which acid is commonly found in vinegar?", options: { 1: "Citric Acid", 2: "Hydrochloric Acid", 3: "Acetic Acid", 4: "Sulfuric Acid" }, answer: 3, userValue: null, subjectId: 3 },
        { id: "10", question: "What is the formula for methane?", options: { 1: "CH3", 2: "CH4", 3: "C2H6", 4: "C2H4" }, answer: 2, userValue: null, subjectId: 3 },
        { id: "11", question: "What is the main component of natural gas?", options: { 1: "Ethane", 2: "Propane", 3: "Methane", 4: "Butane" }, answer: 3, userValue: null, subjectId: 3 },
        { id: "12", question: "Which element is a liquid at room temperature?", options: { 1: "Mercury", 2: "Bromine", 3: "Chlorine", 4: "Iodine" }, answer: 1, userValue: null, subjectId: 3 },
        { id: "13", question: "What is the chemical formula for table sugar?", options: { 1: "C6H12O6", 2: "C12H22O11", 3: "C2H5OH", 4: "C6H6" }, answer: 2, userValue: null, subjectId: 3 },
        { id: "14", question: "What is the common name for calcium carbonate?", options: { 1: "Limestone", 2: "Chalk", 3: "Marble", 4: "All of the above" }, answer: 4, userValue: null, subjectId: 3 },
        { id: "15", question: "Which metal is the best conductor of electricity?", options: { 1: "Gold", 2: "Silver", 3: "Copper", 4: "Aluminum" }, answer: 2, userValue: null, subjectId: 3 },

        { id: "1", question: "What is the capital of France?", options: { 1: "Berlin", 2: "Madrid", 3: "Paris", 4: "Lisbon" }, answer: 3, userValue: null, subjectId: 4 },
        { id: "2", question: "Which is the largest continent by area?", options: { 1: "Asia", 2: "Africa", 3: "North America", 4: "Europe" }, answer: 1, userValue: null, subjectId: 4 },
        { id: "3", question: "Which river is the longest in the world?", options: { 1: "Amazon", 2: "Nile", 3: "Yangtze", 4: "Mississippi" }, answer: 2, userValue: null, subjectId: 4 },
        { id: "4", question: "Mount Everest is located in which mountain range?", options: { 1: "Andes", 2: "Rockies", 3: "Himalayas", 4: "Alps" }, answer: 3, userValue: null, subjectId: 4 },
        { id: "5", question: "What is the smallest country in the world by land area?", options: { 1: "Monaco", 2: "Vatican City", 3: "San Marino", 4: "Liechtenstein" }, answer: 2, userValue: null, subjectId: 4 },
        { id: "6", question: "Which country has the most natural lakes?", options: { 1: "Canada", 2: "United States", 3: "Brazil", 4: "Russia" }, answer: 1, userValue: null, subjectId: 4 },
        { id: "7", question: "Which desert is the largest in the world?", options: { 1: "Gobi", 2: "Sahara", 3: "Kalahari", 4: "Arabian" }, answer: 2, userValue: null, subjectId: 4 },
        { id: "8", question: "What is the capital of Australia?", options: { 1: "Sydney", 2: "Melbourne", 3: "Brisbane", 4: "Canberra" }, answer: 4, userValue: null, subjectId: 4 },
        { id: "9", question: "Which ocean is the largest?", options: { 1: "Atlantic", 2: "Indian", 3: "Pacific", 4: "Arctic" }, answer: 3, userValue: null, subjectId: 4 },
        { id: "10", question: "The Great Barrier Reef is located in which country?", options: { 1: "Australia", 2: "Indonesia", 3: "Philippines", 4: "Japan" }, answer: 1, userValue: null, subjectId: 4 },
        { id: "11", question: "Which U.S. state has the longest coastline?", options: { 1: "California", 2: "Florida", 3: "Alaska", 4: "Texas" }, answer: 3, userValue: null, subjectId: 4 },
        { id: "12", question: "What is the capital of Canada?", options: { 1: "Toronto", 2: "Vancouver", 3: "Ottawa", 4: "Montreal" }, answer: 3, userValue: null, subjectId: 4 },
        { id: "13", question: "Which river flows through the Grand Canyon?", options: { 1: "Colorado River", 2: "Missouri River", 3: "Rio Grande", 4: "Snake River" }, answer: 1, userValue: null, subjectId: 4 },
        { id: "14", question: "Which country is both an island and a continent?", options: { 1: "New Zealand", 2: "Australia", 3: "Greenland", 4: "Iceland" }, answer: 2, userValue: null, subjectId: 4 },
        { id: "15", question: "What is the tallest mountain in North America?", options: { 1: "Mount Logan", 2: "Mount McKinley (Denali)", 3: "Mount Elbert", 4: "Mount Rainier" }, answer: 2, userValue: null, subjectId: 4 },

        { "id": "1", "question": "What does GDP stand for?", "options": { "1": "Gross Domestic Profit", "2": "Global Development Policy", "3": "Gross Domestic Product", "4": "Government Distribution Plan" }, "answer": 3, "userValue": null, "subjectId": 5 },
        { "id": "2", "question": "Which economic concept measures the total value of goods and services produced within a country?", "options": { "1": "GDP", "2": "CPI", "3": "PPP", "4": "FDI" }, "answer": 1, "userValue": null, "subjectId": 5 },
        { "id": "3", "question": "What does CPI stand for?", "options": { "1": "Consumer Price Index", "2": "Corporate Profit Increase", "3": "Capital Investment", "4": "Cost Price Inflation" }, "answer": 1, "userValue": null, "subjectId": 5 },
        { "id": "4", "question": "Which economic indicator reflects the average change in prices over time?", "options": { "1": "CPI", "2": "GDP", "3": "PPP", "4": "FDI" }, "answer": 1, "userValue": null, "subjectId": 5 },
        { "id": "5", "question": "What does FDI stand for in economics?", "options": { "1": "Foreign Direct Investment", "2": "Federal Deposit Insurance", "3": "Financial Derivatives Instrument", "4": "Fixed Deposit Interest" }, "answer": 1, "userValue": null, "subjectId": 5 },
        { "id": "6", "question": "Which economic theory advocates for minimal government intervention in the economy?", "options": { "1": "Keynesian Economics", "2": "Monetarism", "3": "Classical Liberalism", "4": "Socialism" }, "answer": 3, "userValue": null, "subjectId": 5 },
        { "id": "7", "question": "Who is considered the father of modern economics?", "options": { "1": "Adam Smith", "2": "John Maynard Keynes", "3": "Karl Marx", "4": "Milton Friedman" }, "answer": 1, "userValue": null, "subjectId": 5 },
        { "id": "8", "question": "What is the primary role of central banks in managing the economy?", "options": { "1": "Fiscal policy", "2": "Monetary policy", "3": "Trade policy", "4": "Industrial policy" }, "answer": 2, "userValue": null, "subjectId": 5 },
        { "id": "9", "question": "Which economic term describes a sustained period of declining economic activity across an economy?", "options": { "1": "Inflation", "2": "Recession", "3": "Expansion", "4": "Deflation" }, "answer": 2, "userValue": null, "subjectId": 5 },
        { "id": "10", "question": "What does PPP stand for in economics?", "options": { "1": "Public-Private Partnership", "2": "Purchasing Power Parity", "3": "Profit and Loss Statement", "4": "Price Per Product" }, "answer": 2, "userValue": null, "subjectId": 5 },
        { "id": "11", "question": "Which economic indicator measures the average level of prices of goods and services in an economy?", "options": { "1": "CPI", "2": "GDP", "3": "PPP", "4": "FDI" }, "answer": 1, "userValue": null, "subjectId": 5 },
        { "id": "12", "question": "What is a tariff in international trade?", "options": { "1": "Subsidy", "2": "Tax on imports", "3": "Quota", "4": "Embargo" }, "answer": 2, "userValue": null, "subjectId": 5 },
        { "id": "13", "question": "Which economic system is characterized by private ownership of the means of production and market-based allocation of resources?", "options": { "1": "Capitalism", "2": "Socialism", "3": "Communism", "4": "Feudalism" }, "answer": 1, "userValue": null, "subjectId": 5 },
        { "id": "14", "question": "What is the role of the World Bank in the global economy?", "options": { "1": "International monetary policy", "2": "Poverty reduction and development", "3": "Environmental regulation", "4": "Currency stabilization" }, "answer": 2, "userValue": null, "subjectId": 5 },
        { "id": "15", "question": "Which economic theory emphasizes the role of government spending and taxation in stimulating or slowing down the economy?", "options": { "1": "Keynesian Economics", "2": "Monetarism", "3": "Classical Liberalism", "4": "Socialism" }, "answer": 1, "userValue": null, "subjectId": 5 },

        { "id": "1", "question": "What is the theme of 'To Kill a Mockingbird'?", "options": { "1": "Courage", "2": "Love", "3": "Friendship", "4": "Justice" }, "answer": 4, "userValue": null, "subjectId": 6 },
        { "id": "2", "question": "Who wrote '1984'?", "options": { "1": "George Orwell", "2": "F. Scott Fitzgerald", "3": "J.K. Rowling", "4": "Ernest Hemingway" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "3", "question": "In 'Pride and Prejudice', who is Elizabeth Bennet's love interest?", "options": { "1": "Mr. Darcy", "2": "Mr. Bingley", "3": "Mr. Collins", "4": "Mr. Wickham" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "4", "question": "Which Shakespeare play features the characters Romeo and Juliet?", "options": { "1": "Hamlet", "2": "Macbeth", "3": "Romeo and Juliet", "4": "Othello" }, "answer": 3, "userValue": null, "subjectId": 6 },
        { "id": "5", "question": "Who wrote 'The Great Gatsby'?", "options": { "1": "F. Scott Fitzgerald", "2": "Ernest Hemingway", "3": "William Faulkner", "4": "John Steinbeck" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "6", "question": "What is the name of the main character in 'Moby Dick'?", "options": { "1": "Ishmael", "2": "Captain Ahab", "3": "Queequeg", "4": "Starbuck" }, "answer": 2, "userValue": null, "subjectId": 6 },
        { "id": "7", "question": "Which novel begins with the line 'Call me Ishmael'?", "options": { "1": "Moby Dick", "2": "Catch-22", "3": "The Catcher in the Rye", "4": "The Old Man and the Sea" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "8", "question": "Who wrote 'Jane Eyre'?", "options": { "1": "Charlotte Brontë", "2": "Emily Brontë", "3": "Jane Austen", "4": "George Eliot" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "9", "question": "In 'Lord of the Flies', who becomes the leader of the boys on the island?", "options": { "1": "Ralph", "2": "Jack", "3": "Simon", "4": "Piggy" }, "answer": 2, "userValue": null, "subjectId": 6 },
        { "id": "10", "question": "What is the name of Atticus Finch's daughter in 'To Kill a Mockingbird'?", "options": { "1": "Scout", "2": "Jem", "3": "Dill", "4": "Mayella" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "11", "question": "Who wrote 'War and Peace'?", "options": { "1": "Leo Tolstoy", "2": "Fyodor Dostoevsky", "3": "Anton Chekhov", "4": "Ivan Turgenev" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "12", "question": "What is the setting of 'The Adventures of Huckleberry Finn'?", "options": { "1": "Mississippi River", "2": "New York City", "3": "London", "4": "Paris" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "13", "question": "Who is the author of 'The Catcher in the Rye'?", "options": { "1": "J.D. Salinger", "2": "Ernest Hemingway", "3": "F. Scott Fitzgerald", "4": "Mark Twain" }, "answer": 1, "userValue": null, "subjectId": 6 },
        { "id": "14", "question": "What is the name of the monster in 'Frankenstein'?", "options": { "1": "Victor Frankenstein", "2": "Igor", "3": "The Creature", "4": "Dracula" }, "answer": 3, "userValue": null, "subjectId": 6 },
        { "id": "15", "question": "Which character in 'The Lord of the Rings' is known for saying 'My precious'?", "options": { "1": "Gollum", "2": "Frodo", "3": "Gandalf", "4": "Aragorn" }, "answer": 1, "userValue": null, "subjectId": 6 },

        { "id": "1", "question": "What is the term for an individual's unique psychological makeup and how it consistently influences the way they respond to their environment?", "options": { "1": "Personality", "2": "Behaviorism", "3": "Cognition", "4": "Perception" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "2", "question": "Who developed the hierarchy of needs in psychology?", "options": { "1": "B.F. Skinner", "2": "Sigmund Freud", "3": "Abraham Maslow", "4": "Ivan Pavlov" }, "answer": 3, "userValue": null, "subjectId": 7 },
        { "id": "3", "question": "What is the study of how people think, learn, and remember called?", "options": { "1": "Cognitive psychology", "2": "Behavioral psychology", "3": "Developmental psychology", "4": "Social psychology" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "4", "question": "Who is known for proposing the concept of the collective unconscious?", "options": { "1": "Carl Jung", "2": "Jean Piaget", "3": "Erik Erikson", "4": "Albert Bandura" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "5", "question": "What is the term for the psychological process that occurs when two people have similar beliefs or behaviors and tend to reinforce them in each other?", "options": { "1": "Confirmation bias", "2": "Social facilitation", "3": "Groupthink", "4": "Cognitive dissonance" }, "answer": 3, "userValue": null, "subjectId": 7 },
        { "id": "6", "question": "Who conducted the famous 'Little Albert' experiment, demonstrating classical conditioning with fear?", "options": { "1": "B.F. Skinner", "2": "John B. Watson", "3": "Albert Bandura", "4": "Ivan Pavlov" }, "answer": 2, "userValue": null, "subjectId": 7 },
        { "id": "7", "question": "Which psychological theory focuses on the impact of unconscious desires and conflicts on behavior?", "options": { "1": "Behaviorism", "2": "Psychoanalysis", "3": "Humanistic psychology", "4": "Cognitive psychology" }, "answer": 2, "userValue": null, "subjectId": 7 },
        { "id": "8", "question": "What is the term for the psychological principle where people tend to give preferential treatment to information that confirms their pre-existing beliefs or hypotheses?", "options": { "1": "Confirmation bias", "2": "Cognitive dissonance", "3": "Group polarization", "4": "Selective attention" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "9", "question": "Which area of psychology focuses on the study of mental processes such as perception, memory, and reasoning?", "options": { "1": "Cognitive psychology", "2": "Behavioral psychology", "3": "Social psychology", "4": "Developmental psychology" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "10", "question": "Who developed the theory of psychosocial development, which includes stages like 'Trust vs. Mistrust' and 'Identity vs. Role Confusion'?", "options": { "1": "Erik Erikson", "2": "Jean Piaget", "3": "Lawrence Kohlberg", "4": "Abraham Maslow" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "11", "question": "What is the term for the tendency to attribute one's own thoughts, feelings, and motives to others?", "options": { "1": "Projection", "2": "Regression", "3": "Sublimation", "4": "Displacement" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "12", "question": "Who proposed the theory of operant conditioning, which involves reinforcement and punishment to shape behavior?", "options": { "1": "B.F. Skinner", "2": "Ivan Pavlov", "3": "John B. Watson", "4": "Carl Rogers" }, "answer": 1, "userValue": null, "subjectId": 7 },
        { "id": "13", "question": "What is the term for the process by which information is encoded, stored, and retrieved in memory?", "options": { "1": "Perception", "2": "Cognition", "3": "Learning", "4": "Memory" }, "answer": 4, "userValue": null, "subjectId": 7 },
        { "id": "14", "question": "Who is known for proposing the stages of moral development, including stages like 'Preconventional', 'Conventional', and 'Postconventional'?", "options": { "1": "Jean Piaget", "2": "Lawrence Kohlberg", "3": "Erik Erikson", "4": "Abraham Maslow" }, "answer": 2, "userValue": null, "subjectId": 7 },
        { "id": "15", "question": "What is the term for the phenomenon where individuals tend to perform better on tasks when in the presence of others compared to when alone?", "options": { "1": "Social facilitation", "2": "Groupthink", "3": "Deindividuation", "4": "Conformity" }, "answer": 1, "userValue": null, "subjectId": 7 },

        { "id": "1", "question": "What is the SI unit of force?", "options": { "1": "Newton", "2": "Joule", "3": "Watt", "4": "Pascal" }, "answer": 1, "userValue": null, "subjectId": 8 },
        { "id": "2", "question": "What is the formula for calculating acceleration?", "options": { "1": "v = u + at", "2": "a = (v - u) / t", "3": "s = ut + (1/2)at²", "4": "F = ma" }, "answer": 2, "userValue": null, "subjectId": 8 },
        { "id": "3", "question": "Which law of motion states that every action has an equal and opposite reaction?", "options": { "1": "Newton's First Law", "2": "Newton's Second Law", "3": "Newton's Third Law", "4": "Law of Inertia" }, "answer": 3, "userValue": null, "subjectId": 8 },
        { "id": "4", "question": "What is the speed of light in a vacuum?", "options": { "1": "300,000 km/s", "2": "150,000 km/s", "3": "200,000 km/s", "4": "250,000 km/s" }, "answer": 1, "userValue": null, "subjectId": 8 },
        { "id": "5", "question": "Which law describes the relationship between the pressure and volume of a gas at constant temperature?", "options": { "1": "Boyle's Law", "2": "Charles's Law", "3": "Archimedes' Principle", "4": "Pascal's Law" }, "answer": 1, "userValue": null, "subjectId": 8 },
        { "id": "6", "question": "What is the unit of electric charge?", "options": { "1": "Ampere", "2": "Ohm", "3": "Coulomb", "4": "Volt" }, "answer": 3, "userValue": null, "subjectId": 8 },
        { "id": "7", "question": "Who discovered the law of gravitation?", "options": { "1": "Isaac Newton", "2": "Albert Einstein", "3": "Galileo Galilei", "4": "Johannes Kepler" }, "answer": 1, "userValue": null, "subjectId": 8 },
        { "id": "8", "question": "What is the SI unit of electric current?", "options": { "1": "Coulomb", "2": "Ampere", "3": "Volt", "4": "Ohm" }, "answer": 2, "userValue": null, "subjectId": 8 },
        { "id": "9", "question": "Which phenomenon describes the bending of light as it passes from one medium to another?", "options": { "1": "Reflection", "2": "Refraction", "3": "Diffraction", "4": "Interference" }, "answer": 2, "userValue": null, "subjectId": 8 },
        { "id": "10", "question": "What does E=mc² represent?", "options": { "1": "Einstein's equation for energy", "2": "Newton's second law of motion", "3": "Theory of relativity", "4": "Mass-energy equivalence" }, "answer": 4, "userValue": null, "subjectId": 8 },
        { "id": "11", "question": "Which law of thermodynamics states that energy cannot be created or destroyed, only transformed?", "options": { "1": "First Law", "2": "Second Law", "3": "Third Law", "4": "Zeroth Law" }, "answer": 1, "userValue": null, "subjectId": 8 },
        { "id": "12", "question": "What is the unit of capacitance?", "options": { "1": "Hertz", "2": "Coulomb", "3": "Farad", "4": "Ohm" }, "answer": 3, "userValue": null, "subjectId": 8 },
        { "id": "13", "question": "Who discovered electromagnetic induction?", "options": { "1": "Michael Faraday", "2": "Nikola Tesla", "3": "James Clerk Maxwell", "4": "Thomas Edison" }, "answer": 1, "userValue": null, "subjectId": 8 },
        { "id": "14", "question": "What is the force that opposes the relative motion of two surfaces in contact?", "options": { "1": "Friction", "2": "Tension", "3": "Gravity", "4": "Inertia" }, "answer": 1, "userValue": null, "subjectId": 8 },
        { "id": "15", "question": "Which scientist proposed the theory of special relativity?", "options": { "1": "Albert Einstein", "2": "Isaac Newton", "3": "Galileo Galilei", "4": "Johannes Kepler" }, "answer": 1, "userValue": null, "subjectId": 8 },

        { "id": "1", "question": "What is the value of π (pi) correct to two decimal places?", "options": { "1": "3.14", "2": "3.16", "3": "3.12", "4": "3.18" }, "answer": 1, "userValue": null, "subjectId": 9 },
        { "id": "2", "question": "What is the formula for the area of a rectangle?", "options": { "1": "A = πr²", "2": "A = lw", "3": "A = 2πr", "4": "A = 1/2bh" }, "answer": 2, "userValue": null, "subjectId": 9 },
        { "id": "3", "question": "Which of the following is a prime number?", "options": { "1": "12", "2": "15", "3": "17", "4": "20" }, "answer": 3, "userValue": null, "subjectId": 9 },
        { "id": "4", "question": "What is the value of √16?", "options": { "1": "4", "2": "6", "3": "8", "4": "2" }, "answer": 1, "userValue": null, "subjectId": 9 },
        { "id": "5", "question": "Solve for x: 2x + 5 = 15", "options": { "1": "x = 5", "2": "x = 10", "3": "x = 8", "4": "x = 15" }, "answer": 1, "userValue": null, "subjectId": 9 },
        { "id": "6", "question": "What is the formula for the circumference of a circle?", "options": { "1": "C = πd", "2": "C = 2πr", "3": "C = πr²", "4": "C = 1/2bh" }, "answer": 2, "userValue": null, "subjectId": 9 },
        { "id": "7", "question": "Which type of angle measures between 90 and 180 degrees?", "options": { "1": "Right angle", "2": "Acute angle", "3": "Obtuse angle", "4": "Straight angle" }, "answer": 3, "userValue": null, "subjectId": 9 },
        { "id": "8", "question": "What is the value of 5! (5 factorial)?", "options": { "1": "120", "2": "24", "3": "20", "4": "60" }, "answer": 1, "userValue": null, "subjectId": 9 },
        { "id": "9", "question": "Simplify: 2(x + 3) - 4 = 10", "options": { "1": "x = 5", "2": "x = 1", "3": "x = 4", "4": "x = 3" }, "answer": 4, "userValue": null, "subjectId": 9 },
        { "id": "10", "question": "What is the sum of angles in a triangle?", "options": { "1": "90 degrees", "2": "180 degrees", "3": "270 degrees", "4": "360 degrees" }, "answer": 2, "userValue": null, "subjectId": 9 },
        { "id": "11", "question": "What is the formula for the volume of a sphere?", "options": { "1": "V = πr²", "2": "V = 4/3πr³", "3": "V = 2πr", "4": "V = 1/2bh" }, "answer": 2, "userValue": null, "subjectId": 9 },
        { "id": "12", "question": "Which type of triangle has all sides of different lengths?", "options": { "1": "Equilateral triangle", "2": "Isosceles triangle", "3": "Scalene triangle", "4": "Right triangle" }, "answer": 3, "userValue": null, "subjectId": 9 },
        { "id": "13", "question": "What is the value of 2² + 3²?", "options": { "1": "13", "2": "14", "3": "15", "4": "10" }, "answer": 2, "userValue": null, "subjectId": 9 },
        { "id": "14", "question": "Solve for x: 3x - 7 = 14", "options": { "1": "x = 5", "2": "x = 7", "3": "x = 8", "4": "x = 10" }, "answer": 1, "userValue": null, "subjectId": 9 },
        { "id": "15", "question": "What is the formula for the area of a circle?", "options": { "1": "A = πd", "2": "A = 2πr", "3": "A = πr²", "4": "A = 1/2bh" }, "answer": 3, "userValue": null, "subjectId": 9 },

    ],
    filteredQuestionsAndAnswers: [],

    subjectId:"",
   
    answerCheck: [
        { unanswered:0, correctAnswers:0, wrongAnswers:0 }
    ]
};

const biologyReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_QUESTION_AND_ANSWERS_SUCCESS: {
           
            const getSubjectQnA = state.questionsAndAnswers.filter((qna) => {
               
                return state.subjectId == qna.subjectId;

            });
            return {
                ...state,
                filteredQuestionsAndAnswers: getSubjectQnA
            };
        }

        case GET_SUBJECT_ID:{
            console.log("action.payload",action.payload)
            return {
                ...state,
                subjectId: action.payload
            }
        }
       
        case GET_SAVED_QUESTION_AND_ANSWERS_SUCCESS: {
            console.log("&&&&&&",action.payload.id )
            let updatedQuestionsAndAnswers = state.filteredQuestionsAndAnswers.map((qna) =>
                qna.id === action.payload.id ? { ...qna, userValue: action.payload.userValue } : qna,
        )
            return {
                ...state,
                filteredQuestionsAndAnswers: updatedQuestionsAndAnswers
            };
        }
        
        case GET_ON_SUBMIT_RESULT_SUCCESS: {
            let correctAnswers = 0;
            let wrongAnswers = 0;
            let unanswered = 0;
           
           state.filteredQuestionsAndAnswers.map((answers) => {
               console.log("answers.answer === answers.userValue",answers.answer ,answers.userValue)
                    if (answers.userValue==null) {
                        unanswered++;
                    } else if(answers.answer === answers.userValue) {
                        correctAnswers++;
                    }
                    else {
                        wrongAnswers++;
                    }
              
            });

          

            return {
                ...state,
                answerCheck: {unanswered:unanswered,correctAnswers:correctAnswers,wrongAnswers:wrongAnswers}
            };
        }
        
        
        default:
            return state;
    }
};


export default biologyReducer;
