from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from collections import defaultdict


# Clase para resolver el problema del ajedrez
class ChessSolver:
    def __init__(self, n, k, rq, cq, obstacles):
        self.n = n
        self.k = k
        self.rq = rq
        self.cq = cq
        self.obstacles = set(tuple(obstacle) for obstacle in obstacles)

    def calculate_attackable_squares(self):
        directions = [
            (0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (-1, -1), (1, -1), (-1, 1)
        ]
        total_attacks = 0

        for dx, dy in directions:
            x, y = self.rq + dx, self.cq + dy
            while 1 <= x <= self.n and 1 <= y <= self.n:
                if (x, y) in self.obstacles:
                    break
                total_attacks += 1
                x += dx
                y += dy
        return total_attacks

@api_view(['POST'])
def queens_attack(request):
    data = request.data
    n = data['n']
    k = data['k']
    rq = data['rq']
    cq = data['cq']
    obstacles = data['obstacles']

    solver = ChessSolver(n, k, rq, cq, obstacles)
    result = solver.calculate_attackable_squares()

    return Response({"attackable_squares": result})


################# Problem 2 ############

# Clase para resolver el problema de cadenas
class StringSolver:
    def __init__(self, t):
        self.t = t

    def calculate_max_value(self):
        max_value = 0
        length = len(self.t)

        for i in range(length):
            for j in range(i + 1, length + 1):
                substring = self.t[i:j]
                frequency = self.t.count(substring)
                value = len(substring) * frequency
                max_value = max(max_value, value)

        return max_value

@api_view(['POST'])
def string_value(request):
    data = request.data
    t = data['t']

    solver = StringSolver(t)
    result = solver.calculate_max_value()

    return Response({"max_value": result})