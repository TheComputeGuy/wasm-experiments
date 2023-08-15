#include <stdio.h>
#include <stdlib.h>
#include <emscripten/emscripten.h>

using namespace std;

extern "C" EMSCRIPTEN_KEEPALIVE int fibonacci(int x) {

    if (x == 0) {
        return x;
    }
    if (x < 3) {
        return 1;
    }

    return fibonacci(x-1) + fibonacci(x-2);
}

extern "C" EMSCRIPTEN_KEEPALIVE int hello() {
    return rand() % 100 + 1;
}