"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SoftwareRenderer_1 = __importDefault(require("./SoftwareRenderer"));
exports.SoftwareRenderer = SoftwareRenderer_1.default;
const GlRenderer_1 = __importDefault(require("./GlRenderer"));
class GlRenderer {
    constructor() {
        this.self = GlRenderer_1.default.apply(this);
        this.event = this.self.event;
    }
    bind(element) {
        return this.self.bind(element);
    }
    unbind() {
        return this.self.unbind();
    }
    drawFrame(imageData) {
        return this.self.drawFrame(imageData);
    }
    setContentMode(mode) {
        return this.self.setContentMode(mode);
    }
    refreshCanvas() {
        return this.self.refreshCanvas();
    }
}
exports.GlRenderer = GlRenderer;
class CustomRenderer {
    constructor() {
        throw new Error('You have to declare your own custom render');
    }
    bind(element) {
        throw new Error('You have to declare your own custom render');
    }
    unbind() {
        throw new Error('You have to declare your own custom render');
    }
    drawFrame(imageData) {
        throw new Error('You have to declare your own custom render');
    }
    setContentMode(mode) {
        throw new Error('You have to declare your own custom render');
    }
    refreshCanvas() {
        throw new Error('You have to declare your own custom render');
    }
}
exports.CustomRenderer = CustomRenderer;
