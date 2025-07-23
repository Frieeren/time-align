import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import { ApiResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { AuthenticatedRequestDto } from "../dto/request.dto";
import { CommonResponseDto } from "../dto/response.dto";
import { ScheduleParticipantResponseStatus } from "../enums/schedule.enum";
import { CreateScheduleRequestDto, CreateScheduleResponseDto } from "./dto/create-schedule.dto";
import { DetailScheduleResponseDto } from "./dto/detail-schedule.dto";
import { QueryScheduleRequestDto, QueryScheduleResponseDto } from "./dto/query-schedule.dto";
import { UpdateScheduleRequestDto, UpdateScheduleResponseDto } from "./dto/update-schedule.dto";
import { ApiGatewayAuthGuard } from "./guards/api-gateway-auth.guard";
import { SchedulesService } from "./schedules.service";

@ApiTags("schedules")
@UseGuards(ApiGatewayAuthGuard)
@Controller("schedules")
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @ApiSecurity("x-user-id")
  @Post()
  @ApiResponse({ status: 201, description: "일정이 성공적으로 생성됨", type: CreateScheduleResponseDto })
  async create(@Body() createScheduleDto: CreateScheduleRequestDto, @Req() req: AuthenticatedRequestDto) {
    return "create";
  }

  @ApiSecurity("x-user-id")
  @Get()
  @ApiResponse({ status: 200, description: "일정 목록 조회 성공", type: QueryScheduleResponseDto })
  async findAll(@Query() query: QueryScheduleRequestDto, @Req() req: AuthenticatedRequestDto) {
    return "findAll";
  }

  @ApiSecurity("x-user-id")
  @Get(":id")
  @ApiResponse({ status: 200, description: "일정 상세 정보 조회 성공", type: DetailScheduleResponseDto })
  async findOne(@Param("id", ParseIntPipe) id: number, @Req() req: AuthenticatedRequestDto) {
    return "findOne";
  }

  @ApiSecurity("x-user-id")
  @Patch(":id")
  @ApiResponse({ status: 200, description: "일정이 성공적으로 수정됨", type: UpdateScheduleResponseDto })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateScheduleDto: UpdateScheduleRequestDto,
    @Req() req: AuthenticatedRequestDto
  ) {
    return "update";
  }

  @ApiSecurity("x-user-id")
  @Delete(":id")
  @ApiResponse({ status: 200, description: "일정이 성공적으로 삭제됨", type: CommonResponseDto })
  async remove(@Param("id", ParseIntPipe) id: number, @Req() req: AuthenticatedRequestDto) {
    return "remove";
  }

  @ApiSecurity("x-user-id")
  @Post(":id/respond")
  @ApiResponse({ status: 200, description: "참여 응답 완료", type: CommonResponseDto })
  async respondToSchedule(
    @Param("id", ParseIntPipe) id: number,
    @Body("responseStatus") responseStatus: ScheduleParticipantResponseStatus,
    @Req() req: AuthenticatedRequestDto
  ) {
    return "respondToSchedule";
  }

  @ApiSecurity("x-user-id")
  @Post(":id/invite")
  @ApiResponse({ status: 200, description: "사용자 초대 완료", type: CommonResponseDto })
  async inviteUsers(
    @Param("id", ParseIntPipe) id: number,
    @Body("userIds") userIds: number[],
    @Req() req: AuthenticatedRequestDto
  ) {
    return "inviteUsers";
  }

  @ApiSecurity("x-user-id")
  @Get(":id/participants")
  @ApiResponse({ status: 200, description: "참여자 목록 조회 성공", type: CommonResponseDto })
  async getParticipants(@Param("id", ParseIntPipe) id: number, @Req() req: AuthenticatedRequestDto) {
    return "getParticipants";
  }

  @ApiSecurity("x-user-id")
  @Post(":id/invite-link")
  @ApiResponse({ status: 200, description: "초대 링크 생성 완료", type: CommonResponseDto })
  async generateInviteLink(@Param("id", ParseIntPipe) id: number, @Req() req: AuthenticatedRequestDto) {
    return "generateInviteLink";
  }
}
