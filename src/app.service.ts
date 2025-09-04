import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailLead } from './database/entities/email-lead.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(EmailLead)
    private emailLeadRepository: Repository<EmailLead>,
  ) {}

  async saveEmail(email: string): Promise<EmailLead> {
    const newEmailLead = this.emailLeadRepository.create({ email });
    return this.emailLeadRepository.save(newEmailLead);
  }
}
