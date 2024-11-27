"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFreteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_frete_dto_1 = require("./create-frete.dto");
class UpdateFreteDto extends (0, mapped_types_1.PartialType)(create_frete_dto_1.CreateFreteDto) {
}
exports.UpdateFreteDto = UpdateFreteDto;
//# sourceMappingURL=update-frete.dto.js.map