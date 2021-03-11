# 사용자의 대답을 변수에 저장한다.
stadium = input("경기장은 어디입니까?")
winner = input("이긴팀은 어디입니까")
loser = input("진팀은 어디입니까?")
vip = input("우수선수는 누구입니까?")
scoreWin = int(input("이긴팀의 점수는?"))
scoreLooser = int(input("진팀의 점수는?"))



if scoreWin - scoreLooser >3:
    msg = "일방적으로 이겼습니다."
elif scoreWin - scoreLooser ==0:
    msg = "무승부입니다."
else:
    msg = "겨우 이겼습니다."





# 변수와 문자열을 연결하여 기사를 작성한다.
print("")
print("===========================================")
print("오늘", stadium, "에서 경기가 열렸습니다.")
print(winner, "과", loser, "은 치열한 공방전을 펼쳤습니다.")
print(vip, "이(가) 맹활약을 하였습니다.")
print("결국", winner,"이(가)", loser,"을(를) ",msg)
print("===========================================")

