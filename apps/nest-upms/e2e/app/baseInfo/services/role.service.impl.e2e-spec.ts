import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationModule, RoleEntity } from '../../../../src';
import { RoleServiceIpml } from '../../../../src/baseInfo/services/role.service.impl';

describe('RoleServiceImpl', () => {
    let app: INestApplication;
    let roleService: RoleServiceIpml;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        roleService = app.get(RoleServiceIpml);

        async function add(i: number) {
            const role = new RoleEntity();
            role.name = 'role' + i;
            role.title = 'iphone' + i;
            role.description = 'ddd' + i;
            role.create_time = new Date();
            role.update_time = new Date();
            await roleService.insert().then((result) => { }).catch(e => { });
        }
        for (let i = 0; i < 10; i++) {
            await add(i)
        }
        await app.init();
    })

    it(`insert`, async () => {
        const role = new 
        role.name = 'role1';
        role.title = 'iphone';
        role.description = 'ddd';
        role.create_time = new Date();
        role.update_time = new Date();
        await roleService.insert(role).then((result) => {
            expect(result.name).toEqual('role1');
        }).catch(e => {
            expect(e instanceof Error).toEqual(true);
        });
    });
    /**
     * 测试异常
     */
    // it(`delete.throw.DataError`, async () => {
    //     await roleService.delete({ title: 'iphone' }).then(res => {
    //         expect(res.affected).toEqual(1)
    //     }).catch(e => {
    //         expect(e instanceof Error).toEqual(true);
    //     });
    // });

    // it(`save`, async () => {
    //     /** 修改角色 */
    //     /** 创建更新的一个应用 */
    //     let role: RoleEntity = new RoleEntity();
    //     role.name = 'wzry';
    //     role.title = 'hpjy';
    //     role.description = 'dddd';
    //     role.create_time = new Date();
    //     role.update_time = new Date();
    //     //从数据库获取一个应用
    //     await roleService.save(role, { title: 'boss' }).then(res => {
    //         expect(res.title).toBe('hpjy');
    //     }).catch(e => {
    //         expect(e instanceof Error).toEqual(true)
    //     });
    // });

    // it(`get`, async () => {
    //     await roleService.get({ name: 'role1' }).then(res => {
    //         expect(res.name).toEqual(`role1`);
    //     }).catch(e => {
    //         expect(e instanceof Error).toEqual(true)
    //     });
    // });

    afterAll(async () => {
        await app.close();
    });
});
