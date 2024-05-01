var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
    res.send('hello!');
});
app.get('/crawl', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('냐앙');
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
