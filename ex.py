class Me:
    def __init__(self, name, age, hobby):
        self.name = name
        self.age = age
        self.hobby = hobby

    def introduce(self):
        print(f"안녕하세요, 제 이름은 {self.name}입니다.")
        print(f"저는 {self.age}살이고, 취미는 {self.hobby}입니다.")

me = Me("윤동근", 22, "운동")
me.introduce()
