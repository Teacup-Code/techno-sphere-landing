import { Controller, Get, Post, Body, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import express from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Bem-vindo à TechnoEsfera!' };
  }

  @Post('subscribe')
  async subscribe(@Body('email') email: string, @Res() res: express.Response) {
    if (!email) {
      return res.redirect('/?error=email-vazio');
    }
    try {
      await this.appService.saveEmail(email);
      return res.redirect('/success');
    } catch (error) {
      console.error(error);
      return res.redirect('/?error=erro-salvar');
    }
  }

  @Get('success')
  @Render('success')
  success() {
    return {
      message:
        'Inscrição realizada com sucesso! Você será notificado sobre o lançamento.',
    };
  }
}
