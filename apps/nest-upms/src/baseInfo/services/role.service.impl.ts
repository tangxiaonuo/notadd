
import { RoleEntity, PermissionEntity, UserEntity } from '../../typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SaveOptions } from 'typeorm';
import { DataError, RoleNoExistError, ServerError } from '../errors/role.error';
import {prisma, RoleEntityCreateInput, } from '../../prisma';
import { asap } from 'rxjs/internal/scheduler/asap';

export class RoleServiceIpml {
    // constructor(private readonly prisma: Prisma) { 
    //     prisma = this.prisma;
    //  }
    /**
         * 添加角色
         * @param role 
         */
    async insert(role: RoleEntityCreateInput) {
        if (!role.name || !role.title || !role.description) {
            throw new DataError();
        }
        return await prisma.createRoleEntity(role);
    }
    /**
     *@param role delete role
     */
    //  delete(role:RoleEntityWhereInput) {
    //     try {
    //         if (!role.role_id) {
    //             throw new DataError();
    //         }
    //         let existing =  this.prisma.({ role_id: role.role_id });
    //         if (!existing) {
    //             throw new RoleNoExistError();
    //         }
    //         return  this.prisma.deleteRoleEntity({ role_id: role.role_id })
    //     } catch (e) {
    //         throw new DataError();
    //     }

    // }
    /**
     *Query a single role
     *@param where
     */
    // async get(where:RoleEntityWhereInput): Promise<RoleEntity> {
    //     try {
    //         return await this.prisma.find({ where: where });
    //     } catch (e) {
    //         throw new ServerError();
    //     }
    // }
    /**
    *Query role based on id
    */
    // async getfindRoleById(role_id: number): Promise<RoleEntity> {
    //     return await this.roleRepo.findOne(role_id);
    // }
    /**
     * Update role information
     * todo
     * @param data
     * @param where
     */
    // async save(role: RoleEntity) {
    //     try {
    //         return this.roleRepo.save(role);
    //     } catch (e) {
    //         throw new ServerError();
    //     }
    // }

    search(where: Partial<RoleEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
